import { mybooks } from './modules/listBooks.js';
import { Book } from './modules/manageBooks.js';
import { manageLinks } from './modules/manageLinks.js';
import { removeBook } from './modules/removeBook.js';
import { DateTime } from './modules/luxon.js';

if (localStorage.getItem('books') !== null && localStorage.getItem('books') !== undefined) {
  Book.setBooks(JSON.parse(localStorage.getItem('books')));
}
const books = Book.getBooks();

mybooks(books);

manageLinks();

removeBook(Book, mybooks);

document.querySelector('.current-date').innerHTML = DateTime.local();