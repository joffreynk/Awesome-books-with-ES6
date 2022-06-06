const removeBook = (Book, mybooks) => {
  const allBooks = document.querySelectorAll(".remove-btn");
  allBooks.forEach((oneBook) => {
    oneBook.addEventListener("click", (e) => {
      console.log('cliacked ',e.target.id);
      Book.removeBook(Number(e.target.id));
      const books = Book.getBooks();
      localStorage.setItem("books", JSON.stringify(books));
      mybooks(books);
      location.reload();
    });
  });
}

export { removeBook };
