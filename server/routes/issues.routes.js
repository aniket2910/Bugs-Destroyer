const express = require("express");
const {
  getAllIssues,
  createIssue,
  updateIssue,
  deleteIssue,
  commentToIssue,
} = require("../controllers/issues.controller");

const issueRoutes = express.Router();

issueRoutes.get("/all", getAllIssues);
issueRoutes.post("/create", createIssue);
issueRoutes.patch("/update/:id", updateIssue);
issueRoutes.delete("/delete/:id", deleteIssue);
issueRoutes.patch("/comment/:id", commentToIssue);

module.exports = { issueRoutes };
