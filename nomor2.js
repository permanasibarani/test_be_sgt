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
	{
		title: "The Da Vinci Code2",
		author: "Dan Brown",
		year: 2003,
		genre: "Mystery",
		rating: 4.2,
	},
];

const categorizeBookByItsGenre = (arr) => {
	const genreMap = {};

	for (let i = 0; i < arr.length; i++) {
		const genre = arr[i].genre;
		if (!genreMap[genre]) {
			genreMap[genre] = { genre: genre, movieList: [] };
		}

		genreMap[genre].movieList.push(arr[i]);
	}

	return Object.values(genreMap);
};

const sortBookByItsRating = (groupedBooks) => {
	for (let i = 0; i < groupedBooks.length; i++) {
		const movieList = groupedBooks[i].movieList;
		for (let j = 1; j < movieList.length; j++) {
			const currentRating = movieList[j].rating;
			const currentMovie = movieList[j];
			let k = j - 1;
			for (k; k >= 0 && movieList[k].rating < currentRating; k--) {
				movieList[k + 1] = movieList[k];
			}
			movieList[k + 1] = currentMovie;
		}
	}
	return groupedBooks;
};

const filterTopThreeBooks = (groupedBooks) => {
	for (let i = 0; i < groupedBooks.length; i++) {
		const { movieList } = groupedBooks[i];
		groupedBooks[i].movieList = movieList.slice(0, 3);
	}
	return groupedBooks;
};

const result = filterTopThreeBooks(
	sortBookByItsRating(categorizeBookByItsGenre(books)),
);
