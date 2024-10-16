// Objects:
// 1. Create a User object that contains properties for name, age, and email. Include methods to greet (returns a greeting message) and updateEmail.

const user = {
    name: "Alice",
    age: 35,
    email: "alice@example.com",
    greet: function() {
      return `Hello, I am ${this.name} and I am ${this.age} years old.`;
    },
    updateEmail: function(newEmail) {
      this.email = newEmail;
    }
  };
  console.log(user.greet());
  user.updateEmail("newalice@example.com");
  console.log(user.email);

// 2. Create an array of workers objects with properties for name and age. Write a function that takes an age as a parameter and returns an array of users older than that age.
const workers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "Max", age: 47 }
];

function filterUsersByAge(minAge) {
      return workers.filter(worker => worker.age > minAge);
      }
      const olderUsers = filterUsersByAge(24);
      console.log(olderUsers);



// 3. Modify the book objects to include a pagesRead property. Write a function that calculates and returns the total number of pages read from all books.
const collection = [
  { title: "The Great Gatsby", pages: 180, pagesRead: 100 },
  { title: "1984", pages: 328, pagesRead: 50 },
  { title: "To Kill a Mockingbird", pages: 281, pagesRead: 281 }
];

function countTotalPagesRead() {
    let total = 0; 
    collection.forEach(book => {
      total += book.pagesRead; 
    });
    return total; 
  }
  const totalRead = countTotalPagesRead();
  console.log(totalRead);
// 4. Create an array of book objects, where each book has properties such as title, author, pages, and isRead. 
//    Write a function to add a new book and a function to list all books with their read status.
const library = [];
function addNewBook(title, author, pages, isRead = false) {
  library.push({ title, author, pages, isRead });
}

// Function to list all books
function listBooks() {
  library.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.isRead ? 'Yes' : 'No'}`);
  });
}
addNewBook("The Great Gatsby", "F. Scott Fitzgerald", 180);
addNewBook("1984", "George Orwell", 328, true); 
listBooks();


// addBook("The Great Gatsby", "F. Scott Fitzgerald", 180);
// addBook("1984", "George Orwell", 328);
// listBooks(); // Title: example, Author: example, Pages: example, Read: true/false || yes/no

// 5. Extra: Grouping Library Functions into One Object
// const librarySystem = {};

// Example usage:
// librarySystem.books // book[]
// librarySystem.listBooks(); :print in console: 'Title: string, Author: string, Pages: number, Read: true/false || yes/no'
// librarySystem.addNewBook(book); // :newBook
// librarySystem.getBookById(bookId); // :book | undefined
// librarySystem.updateBook(bookId, book); // :book
// librarySystem.deleteBook(bookId); // :true/false
// librarySystem.getBooksByAvailableStatus(status); // :book[] returns all available or unavailable books according to the filter

// Book Entity (shape of a book)
// book {
//   title: string;
//   author: string;
//   year: number;
//   genre: string;
//   isAvailable: boolean;
// }

const librarySystem = {
    books: [],
    addNewBook: function(title, author, pages, isAvailable) {
      const newBook = { title, author, pages, isAvailable };
      this.books.push(newBook);
    },
    listBooks: function() {
      this.books.forEach((book, index) => {
        console.log(`ID: ${index}, Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.isAvailable ? 'Yes' : 'No'}`);
      });
    },
    getBookById: function(bookId) {
      return this.books[bookId] || undefined; 
    },
    updateBook: function(bookId, updatedBook) {
      if (this.books[bookId]) {
        this.books[bookId] = { ...this.books[bookId], ...updatedBook };
        return this.books[bookId];
      }
      return undefined; 
    },
    deleteBook: function(bookId) {
      if (this.books[bookId]) {
        this.books.splice(bookId, 1);
        return true; // Successfully deleted
      }
      return false; 
    },
    getBooksByAvailableStatus: function(status) {
      return this.books.filter(book => book.isAvailable === status);
    }
  };
  
  // Example usage
  librarySystem.addNewBook("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
  librarySystem.addNewBook("1984", "George Orwell", 328, false);
  librarySystem.listBooks();
  const book = librarySystem.getBookById(0);
  console.log(book);
  const updatedBook = librarySystem.updateBook(1, { isAvailable: true });
  console.log(updatedBook);
  const deleted = librarySystem.deleteBook(0);
  console.log(deleted);
  const availableBooks = librarySystem.getBooksByAvailableStatus(true);
  console.log(availableBooks);
  