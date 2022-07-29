import axios from 'axios'

//Actions Types
export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
export const GET_TODOS_ERROR = "GET_TODOS_ERROR"


//Actions
const getTodosRequest = () => ({
    type: GET_TODOS_REQUEST
})

const getTodosSuccess = (data) => ({
    type: GET_TODOS_SUCCESS,
    payload: data
})

const getTodosError = (error) => ({
    type: GET_TODOS_REQUEST,
    payload: error
})

//Fetching APIs
export const getTodosData = () => (dispatch) => {
    // const token = localStorage.getItem("token")
    const api = process.env.REACT_APP_API_URL
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJuaXRpbiIsImxhc3RuYW1lIjoia2FkYW0iLCJ1c2VyX2lkIjoiNjJlMzcxNTVhY2MzMjIwZWFiMTVmYjQxIiwiZW1haWwiOiJuaXRpbkBnbWFpbC5jb20iLCJpYXQiOjE2NTkwNzMxNzAsImV4cCI6MTY1OTE1OTU3MH0.Sc8ZcS0X4YwmGDlaQW-S7Kaa80KDboFhj6EuRPBxcu4"
    dispatch(getTodosRequest());
    axios({
        method: "GET",
        url: `${api}/todo/all-todos`,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then((res) => dispatch(getTodosSuccess(res.data)))
        .catch((err) => dispatch(getTodosError(err)))
}




