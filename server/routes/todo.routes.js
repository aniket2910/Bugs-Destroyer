const { Router } = require("express")
const TodoModel = require("../models/TodoSchema");

const todoRouter = Router();

//getting Users Todos
todoRouter.get("/:userId/todos", async (req, res) => {
    let userId = req.params;
    let todos = await TodoModel.find(userId)
    return res.send(todos)
})

//post Todos
todoRouter.post("/:userId/todos", async (req, res) => {
    const userId = req.params.userId; //here we get userId from params 
    console.log(userId)
    let payload = {
        ...req.body,
        userId
    }
    console.log(payload)
    let todo = await new TodoModel(payload);
    todo.save((err, success) => {
        if (err) {
            return res.status(500).send({ message: "something went wrong" });
        }
        return res.status(201).send(success) 
    })
})

//partially Delete Todos
todoRouter.patch("/:userId/todos/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const DeleteTodo = await TodoModel.findByIdAndUpdate(_id, req.body);
        return res.send(DeleteTodo)
    }
    catch (error) {
        return res.status(400).send(error)
    }
})

//Upadate Status
todoRouter.patch("/:userId/todos/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const updateStatus = await TodoModel.findByIdAndUpdate(_id, req.body);
        return res.send(updateStatus)
    }
    catch (error) {
        return res.status(400).send(error)
    }
})

module.exports = todoRouter;