function findAccountById(accounts, id) {

  for(let key in accounts) {
    let test = accounts[key].id;
    if (test.includes(id)) {
      return accounts[key];
    }
  }
  
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) => (account1.name.last) > (account2.name.last) ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  for (let id in books) {
    let result = books[id].borrows.filter((book) => book.id === account.id);
    count += result.length;
      }
   return count;
   }


function getBooksPossessedByAccount(account, books, authors) {
  let arr = [];
  for ( let id in books) {
    if (books[id].borrows.some((borrow) => account.id === borrow.id && borrow.returned === false)) {
      for (let index in authors) {
        if (authors[index].id === books[id].authorId) {
           arr.push({...books[id], author: authors[index]});
        }
      }
    }
  }
  return arr;
  
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
