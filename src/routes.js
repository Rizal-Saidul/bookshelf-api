const { Router } = require("express");
const { addBook } = require("./handler");


// import all controllers
// import SessionController from './app/controllers/SessionController';

const router = new Router();

// Add routes
router.post('/books', addBook);
// routes.get('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = router;