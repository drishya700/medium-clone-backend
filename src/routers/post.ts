import express from "express";
import {
  comment,
  deletePost,
  editPost,
  explorePost,
  getAllComments,
  getAllSavedFromList,
  getHomePost,
  getPost,
  getPostOfTopic,
  getUserPost,
  ignoreAuthor,
  ignorePost,
  morefrom,
  savePost,
  suggestTopics,
  suggestTopPosts,
  unSavePost,
  vote,
  writePost,
} from "../controllers/post.controller";
import isAuthenticated from "../middlewares/auth";
const router = express.Router();

router.route("/write").post(isAuthenticated, writePost);

router.route("/home").get(isAuthenticated, getHomePost);

router.route("/explore").get(explorePost);

router
  .route("/:postId")
  .get(getPost)
  .put(isAuthenticated, editPost)
  .delete(isAuthenticated, deletePost);

router.route("/save/:postId").patch(isAuthenticated, savePost);

router.route("/unsave/:postId").patch(isAuthenticated, unSavePost);

router.route("/comments/:postId").get(isAuthenticated, getAllComments);

router.route("/saved/:listName").get(isAuthenticated, getAllSavedFromList);

router.route("/users/:topic").get(isAuthenticated, getPostOfTopic);

router.route("/vote/:postId").patch(isAuthenticated, vote);

router.route("/comment/:postId").put(isAuthenticated, comment);

router.route("/topic/:topic").get(getPostOfTopic);

router.route("/user/:userId").get(getUserPost);

router.route("/ignoreAuthor/:userId").patch(isAuthenticated, ignoreAuthor);

router.route("/ignore/:postId").patch(isAuthenticated, ignorePost);

router.route("/suggest/topics").get(suggestTopics);

router.route("/suggest/posts").get(isAuthenticated, suggestTopPosts);

router.route("/more/:postId/:userId").get(morefrom);

export default router;
