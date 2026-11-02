let books = [
  {
    title: "Iron Man",
    authorName: "Stan Lee",
    releaseYear: 1968
  },
  {
    title: "Spider-Man",
    authorName: "Stan Lee",
    releaseYear: 1962
  },
  {
    title: "Doctor Strange",
    authorName: "Stan Lee",
    releaseYear: 1963
  }
];

const sortByYear = (book1, book2) => {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
};

const filteredBooks = books.filter(book => book.releaseYear <= 1965);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);