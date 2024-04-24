// Favorites.jsx
import React, { useState } from 'react'
import { Header } from '../../shared/ui/Header/Header'
import { Film } from '../../shared/ui/Film/Film'
import { filmsData, toggleFavorite } from '../../database/films'

export const Favorites = () => {
	const [favoriteFilms, setFavoriteFilms] = useState(
		filmsData.filter(film => film.isFavorited)
	)

	const handleToggleFavorite = (filmId, isFavorite) => {
		toggleFavorite(filmId)
		if (isFavorite) {
			setFavoriteFilms(favoriteFilms.filter(id => id !== filmId))
		} else {
			setFavoriteFilms([...favoriteFilms, filmId])
		}
	}

	const listItems = favoriteFilms.map(film => (
		<Film key={film.id} film={film} toggleFavorite={toggleFavorite} />
	))

	return (
		<>
			<Header />
			<div className='favorites'>
				<div className='title'>Favorites</div>
				<div className='favorites-list'>{listItems}</div>
			</div>
		</>
	)
}
