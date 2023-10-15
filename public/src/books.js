function findAuthorById(authors, id) {
    return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const returned = [];
  const notReturned = [];
  for (let id in books) {
    const book = books[id];
    const firstBorrower = book.borrows[0];
    
    firstBorrower.returned ?
      returned.push(book) :
      notReturned.push(book);
    }

  return [notReturned, returned];
}

function getBorrowersForBook(book, accounts) {
  
  let result = book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return {...borrow, ...account};
  });
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
