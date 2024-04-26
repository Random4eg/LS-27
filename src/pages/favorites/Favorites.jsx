// Favorites.jsx
import { useState } from 'react'
import { Header } from '../../shared/ui/Header/Header'
import { Film } from '../../shared/ui/Film/Film'
import { filmsData, toggleFavorite } from '../../database/films'

export const Favorites = () => {
	const [favoriteFilms] = useState(filmsData.filter(film => film.isFavorited))

	const listItems = favoriteFilms.map(film => (
		<Film key={film.id} film={film} toggleFavorite={toggleFavorite} />
	))

	return (
		<>
			<div className='favorites-box'>
				<Header />
				<div className='favorites'>
					<div className='title'>Favorites</div>
					<div className='favorites-list'>{listItems}</div>
				</div>
			</div>
		</>
	)
}
