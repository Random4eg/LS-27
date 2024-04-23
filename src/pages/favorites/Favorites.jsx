// Favorites.jsx
import React, { useState } from 'react'
import { Header } from '../../shared/ui/Header/Header'
import {Film} from '../../shared/ui/Film/Film' // Користуємось імпортом без фігурних дужок для Film
import { films } from '../../database/films'

export const Favorites = () => {
	const [favoriteFilms, setFavoriteFilms] = useState([])

	const toggleFavorite = (filmId, isFavorite) => {
		if (isFavorite) {
			setFavoriteFilms([...favoriteFilms, filmId])
		} else {
			setFavoriteFilms(favoriteFilms.filter(id => id !== filmId))
		}
	}

	const listItems = films.map(film => (
		<Film
			key={film.id}
			film={film}
			isFavorite={favoriteFilms.includes(film.id)}
			onToggleFavorite={toggleFavorite}
		/>
	))

	return (
		<>
			<Header />
			<div className='favorites'>
				<div className='title'>Favourites</div>
				<div className='favorites-list'>{listItems}</div>
			</div>
		</>
	)
}
