const { Router } = require("express");
const {
    addBookHandler,
    getBookHandler,
    getBookBYIdHandler,
    editBookBYIdHandler,
    deleteBookBYIdHandler,
} = require("./handler");

const router = new Router();

router.post("/books", addBookHandler);
router.get("/books", getBookHandler);
router.get("/books/:id", getBookBYIdHandler);
router.put("/books/:id", editBookBYIdHandler);
router.delete("/books/:id", deleteBookBYIdHandler);

module.exports = router;