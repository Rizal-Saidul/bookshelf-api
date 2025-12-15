const { Router } = require("express");
const {
  addBook,
  getBookhandler,
  getBooksById,
  editBooksBYId,
  deleteBookBYIdHandler,
} = require("./handler");

// import all controllers
// import SessionController from './app/controllers/SessionController';

const router = new Router();

// Add routes
router.post("/books", addBook);
router.get("/books", getBookhandler);
router.get("/books/:id", getBooksById);
router.put("/books/:id", editBooksBYId);
router.delete("/books/:id", deleteBookBYIdHandler);

module.exports = router;