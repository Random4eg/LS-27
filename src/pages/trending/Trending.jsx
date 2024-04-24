// Trending.jsx
import React, { useState } from 'react'
import { Header } from '../../shared/ui/Header/Header'
import { Film } from '../../shared/ui/Film/Film'
import { filmsData, toggleFavorite } from '../../database/films'

export const Trending = () => {
	const [isFavorited, setIsFavorited] = useState(false)

	const toggleLike = () => {
		setIsFavorited(!isFavorited)
	}

	const listItems = filmsData.map(film => (
		<Film key={film.id} film={film} toggleFavorite={toggleFavorite} />
	))

	return (
		<>
			<Header />
			<div className='trending'>
				<div className='title'>Trending</div>
				<div className='trending-list'>{listItems}</div>
			</div>
			<div className='main-trend'>sjdhfgjksdhf</div>
		</>
	)
}
