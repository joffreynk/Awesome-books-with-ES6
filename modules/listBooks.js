const mybooks = (books) => {
  const displyBooks = document.querySelector('.bookslist');
  displyBooks.innerHTML = '';
  books.forEach((book) => {
    const list = document.createElement('li');
    const author = document.createElement('p');
    const btn = document.createElement('button');
    btn.innerHTML = 'Remove';
    author.innerHTML = `'${ book.title }' by ${ book.author }`;
    btn.setAttribute('id', book.id);
    btn.setAttribute('class', 'remove-btn');
    list.appendChild(author);
    list.appendChild(btn);
    displyBooks.appendChild(list);
  });
};

export {mybooks}