// films.js
export let filmsData = [
	{
		id: 1,
		title: 'Tokyo Train',
		image: '/src/assets/image/TokioTrain.png',
		year: '2022',
		genre: 'Action comedy',
		isFavorited: true,
		playback: '1h 45m',
		description:
			'The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.',
		star: '7.5/10'
	},
	{
		id: 2,
		title: 'Moonfall',
		image: '/src/assets/image/Moonfall.png',
		year: '2022',
		genre: 'Sci-fi',
		isFavorited: true,
		playback: '2h 10m',
		description:
			'The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.',
		star: '8.0/10'
	},
	{
		id: 3,
		title: 'Life in Paris',
		image: '/src/assets/image/LifeInParis.png',
		year: '2023',
		genre: 'Documentary series',
		isFavorited: false,
		playback: '3h 20m',
		description:
			'The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.',
		star: 'N/A'
	},
	{
		id: 4,
		title: 'House of Gucci',
		image: '/src/assets/image/HouseOfGucci.png',
		year: '2021',
		genre: 'Drama',
		isFavorited: false,
		playback: '2h 38m',
		description:
			'The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.',
		star: '7.8/10'
	}
]

export function toggleFavorite(filmId) {
	filmsData = filmsData.map(film => {
		if (film.id === filmId) {
			return { ...film, isFavorited: !film.isFavorited }
		}
		return film
	})
}

// {
// 	id: 1,
// 	title: "Bullet science",
// 	image: 'https://images.indianexpress.com/2022/08/bullet-train-review.jpg',
// 	year: "2022",
// 	genre: "Action comedy",
// 	isFavorited: true,
// },
// {
// 	id: 2,
// 	title: "House of Gucci",
// 	image: 'https://m.media-amazon.com/images/M/MV5BMzNhZDkzMzYtNmY2Ny00YWY5LTg4YjAtNTFlMzA2ODQxMTcxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
// 	year: "2022",
// 	genre: "Drama",
// 	isFavorited: true,
// },
