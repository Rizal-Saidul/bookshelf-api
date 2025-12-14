const { Router } = require("express");
const { addBook, getBookhandler, getBooksById } = require("./handler");


// import all controllers
// import SessionController from './app/controllers/SessionController';

const router = new Router();

// Add routes
router.post('/books', addBook);
router.get('/books', getBookhandler);
router.get('/books/:id', getBooksById);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = router;