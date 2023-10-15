function getTotalBooksCount(books) {
  let count = 0;
  books.forEach((book) => count++);
  return count;
}

function getTotalAccountsCount(accounts) {
  let count = 0;
  accounts.forEach((account) => count++);
  return count;
}

function getBooksBorrowedCount(books) {
  let count = 0;
  
  for (let index in books) {
    const book = books[index];
    const firstBorrower = book.borrows[0]
    if (firstBorrower.returned === false) {
      count++;
    }
    
  }
  
  return count;
}

//Helper Function
function sortObjectByValues(obj) {
  const keys = Object.keys(obj);
  return keys.sort((keyA, keyB) => {
    if (obj[keyA] > obj[keyB]) {
      return -1;
    } else if (obj[keyB] > obj[keyA]) {
      return 1;
    } else {
      return 0;
    }
  });
}

function getMostCommonGenres(books) {
  const count = books.reduce((acc, { genre }) => {
    if (acc[genre]) {
      acc[genre] += 1;
    } else {
      acc[genre] = 1;
    }

    return acc;
  }, {});

 const sorted = sortObjectByValues(count);
  return sorted.map((name) => ({ name, count: count[name] })).slice(0, 5);
}


function getMostPopularBooks(books) {
  return books.map((book) => {
    return {name: book.title, count: book.borrows.length};
  }).sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1)).slice(0, 5);
}
  
function sortByPopularity(item1, item2) {
  return item2.count - item1.count
}

function getMostPopularAuthors(books, authors) {
  let getAuthors = authors.reduce((account, author) => {
    var { name: { first, last }, id } = author;
    account[id] = { name: `${first} ${last}`, count: 0 };
    books.forEach((book) => {
       if (book.authorId === id) {
         account[id].count += book.borrows.length;
       }
    });
    return account; 
  }, {}); 
  
  return Object.values(getAuthors).sort(sortByPopularity).slice(0, 5);
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
