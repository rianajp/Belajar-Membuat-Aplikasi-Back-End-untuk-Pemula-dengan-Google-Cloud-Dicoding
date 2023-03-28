const {
  addBookHandler,
  showAllBooksHandler,
  showBookByIdHandler,
  updateBookHandler,
  deleteBookHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: showAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: showBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
