const { nanoid } = require("nanoid");
const books = require("./books");

// Add Book
const addBookHandler = (req, res) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = req.body;

  if (!name) {
    return res.status(400).json({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });
  }

  if (readPage > pageCount) {
    return res.status(400).json({
      status: "fail",
      message:
        "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
  }

  const finished = readPage == pageCount;

  const id = nanoid(12);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  let newBooks = {
    id: id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    insertedAt,
    updatedAt,
  };

  books.push(newBooks);

  res.status(201).json({
    status: "success",
    message: "Buku berhasil ditambahkan",
    data: {
      bookId: id,
    },
  });
};

// get All Books
const getBookHandler = (req, res) => {
  const responseBooks = books.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  res.status(200).json({
    status: "success",
    data: {
      books: responseBooks,
    },
  });
};

// get  Books By Id
const getBookBYIdHandler = (req, res) => {
  const { id } = req.params;

  const bookIndex = books.find((b) => b.id === id);

  if (!bookIndex) {
    return res.status(404).json({
      status: "fail",
      message: "Buku tidak ditemukan",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      book: bookIndex,
    },
  });
};

// edit Book By Id
const editBookBYIdHandler = (req, res) => {
  const { id } = req.params;

  const bookIndex = books.findIndex((b) => b.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Gagal memperbarui buku. Id tidak ditemukan",
    });
  }

  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = req.body;

  if (!name) {
    return res.status(400).json({
      status: "fail",
      message: "Gagal memperbarui buku. Mohon isi nama buku",
    });
  }

  if (readPage > pageCount) {
    return res.status(400).json({
      status: "fail",
      message:
        "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
    });
  }

  const finished = readPage === pageCount;
  const updatedAt = new Date().toISOString();

  books[bookIndex] = {
    ...books[bookIndex],
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    updatedAt,
  };

  res.status(200).json({
    status: "success",
    message: "Buku berhasil diperbarui",
  });
};

// Delete Book By Id
const deleteBookBYIdHandler = (req, res) => {
  const { id } = req.params;

  const bookIndex = books.findIndex((b) => b.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Buku gagal dihapus. Id tidak ditemukan",
    });
  }

  books.splice(bookIndex, 1);

  return res.status(200).json({
    status: "success",
    message: "Buku berhasil dihapus",
  });
};

module.exports = {
  addBookHandler,
  getBookHandler,
  getBookBYIdHandler,
  editBookBYIdHandler,
  deleteBookBYIdHandler,
};