const books = [
	{
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		year: 1925,
		genre: "Fiction",
		rating: 4.5,
	},
	{
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		year: 1960,
		genre: "Fiction",
		rating: 4.9,
	},
	{
		title: "1984",
		author: "George Orwell",
		year: 1949,
		genre: "Science Fiction",
		rating: 4.2,
	},
	{
		title: "The Hunger Games",
		author: "Suzanne Collins",
		year: 2008,
		genre: "Science Fiction",
		rating: 4.6,
	},
	{
		title: "Pride and Prejudice",
		author: "Jane Austen",
		year: 1813,
		genre: "Romance",
		rating: 4.7,
	},
	{
		title: "Jane Eyre",
		author: "Charlotte Bronte",
		year: 1847,
		genre: "Romance",
		rating: 4.3,
	},
	{
		title: "The Da Vinci Code",
		author: "Dan Brown",
		year: 2003,
		genre: "Mystery",
		rating: 3.9,
	},
	{
		title: "Murder on the Orient Express",
		author: "Agatha Christie",
		year: 1934,
		genre: "Mystery",
		rating: 4.1,
	},
	{
		title: "The Name of the Rose",
		author: "Umberto Eco",
		year: 1980,
		genre: "Mystery",
		rating: 4.4,
	},
];

const getTopThreeBooksByGenre = (books) => {
	const genreGroups = {};
	for (const book of books) {
		if (!genreGroups[book.genre]) {
			genreGroups[book.genre] = [];
		}
		genreGroups[book.genre].push(book);
	}

	const result = [];
	for (const genre in genreGroups) {
		const booksInGenre = genreGroups[genre];
		booksInGenre.sort((a, b) => b.rating - a.rating);
		const topBooks = booksInGenre.slice(0, 3);
		result.push(...topBooks);
	}

	return result;
};

console.log(getTopThreeBooksByGenre(books));
