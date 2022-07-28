const { CommentModel } = require("../models/commentsSchema.model");
const { IssueModel } = require("../models/IssueSchema.model");

// To get all issues
const getAllIssues = async (req, res) => {
  try {
    const issues = await IssueModel.find({}).populate("comments");
    return res.status(200).json({ data: issues });
  } catch (e) {
    res.status(500).json({ type: "error", message: e });
  }
};

// To create an issue
const createIssue = async (req, res) => {
  const { title, desc, code } = req.body;
  try {
    const issue = await IssueModel.create({
      title,
      desc,
      code,
      deleted: false,
    });
    await issue.save();
    return res
      .status(201)
      .json({ type: "success", message: "Issue created successfully" });
  } catch (e) {
    res.status(500).json({ type: "error", message: e });
  }
};

// To update an issue
const updateIssue = async (req, res) => {
  const id = req.params.id;
  try {
    const update_issue = await IssueModel.findOneAndUpdate(
      { _id: id },
      req.body
    );
    await update_issue.save();
    return res
      .status(200)
      .json({ type: "success", message: "Issue updated successfully!" });
  } catch (e) {
    res.status(500).json({ type: "error", message: e });
  }
};

// To delete an issue
const deleteIssue = async (req, res) => {
  try {
    const deleteIssue = await IssueModel.findOneAndUpdate(
      { _id: req.params.id },
      { deleted: true }
    );
    await deleteIssue.save();
    return res
      .status(200)
      .json({ status: 200, message: "Deleted Successfully!" });
  } catch (e) {
    res.status(500).json({ type: "error", message: e });
  }
};

// To  comment to a particular issue
const commentToIssue = async (req, res) => {
  const id = req.params.id;
  try {
    const comment = await CommentModel.create({
      comment: req.body.comment,
      issue_id: id,
    });
    await comment.save();

    const issue = await IssueModel.findById(id);
    issue.comments.push(comment._id);
    await issue.save();
    return res.status(201).json({ type: "success", message: "Added Comment" });
  } catch (e) {
    res.status(500).json({ type: "error", message: e });
  }
};

module.exports = {
  getAllIssues,
  createIssue,
  updateIssue,
  deleteIssue,
  commentToIssue,
};
