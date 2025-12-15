const { Router } = require("express");
const {
  addBookHandler,
  editBookBYIdHandler,
  deleteBookBYIdHandler,
  getAllBooksHandler,
  getBookByIdHandler,
} = require("./handler");

const router = new Router();

router.post("/books", addBookHandler);
router.get("/books", getAllBooksHandler);
router.get("/books/:id", getBookByIdHandler);
router.put("/books/:id", editBookBYIdHandler);
router.delete("/books/:id", deleteBookBYIdHandler);

module.exports = router;