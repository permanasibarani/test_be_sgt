const books = [
	{
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		year: 1925,
		genre: "Fiction",
	},
	{
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		year: 1960,
		genre: "Fiction",
	},
	{
		title: "1984 Romance",
		author: "George Orwell",
		year: 1949,
		genre: "Science Fiction",
	},
	{
		title: "The Hunger Games",
		author: "Suzanne Romance",
		year: 2008,
		genre: "Science Fiction",
	},
	{
		title: "Pride and Prejudice",
		author: "Jane Austen",
		year: 1813,
		genre: "Romance",
	},
];

const getLastTenYearBook = (arr) => {
	const currentYear = new Date().getFullYear();
	const arrarrResult = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].year >= currentYear - 10) {
			arrarrResult.push(arr[i]);
		}
	}
	return arrarrResult;
};

const search = (query) => {
	const lowerCaseQuery = query.toLowerCase();
	const arrResult = [];

	for (let i = 0; i < books.length; i++) {
		const book = books[i];

		if (
			book.title.toLowerCase().includes(lowerCaseQuery) ||
			book.author.toLowerCase().includes(lowerCaseQuery) ||
			book.year.toString().includes(lowerCaseQuery) ||
			book.genre.toLowerCase().includes(lowerCaseQuery)
		) {
			arrResult.push(book);
		}
	}

	return arrResult;
};

console.log(getLastTenYearBook(books)); //* Tidak ada buku yang keluar dalam 10 tahun terakhir
console.log(search("romance"));
