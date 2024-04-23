// Film.jsx
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { Likeicon } from '../../icons/Likeicon'
import '/src/shared/ui/Film/Film.scss'
import { DisLikeicon } from '../../icons/DisLikeicon'

export const Film = ({ film, isFavorite, onToggleFavorite }) => {
	const [favorited, setFavorited] = useState(isFavorite)

	useEffect(() => {
		setFavorited(isFavorite)
	}, [isFavorite])

	const handleToggleFavorite = () => {
		const updatedFavorite = !favorited
		setFavorited(updatedFavorite)
		onToggleFavorite && onToggleFavorite(film.id, updatedFavorite)
	}

	return (
		<div
			className='film'
			style={{
				backgroundImage: `url(${film.image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
		>
			<div className='checkpoint'>
				<label>
					<button className='light' onClick={handleToggleFavorite}>
						{favorited ? <Likeicon /> : <DisLikeicon />}
					</button>
				</label>
			</div>
			<div className='film-info'>
				<div>{film.title}</div>
				<div>{film.year}</div>
				<div>{film.genre}</div>
			</div>
		</div>
	)
}

Film.propTypes = {
	film: PropTypes.object.isRequired,
	isFavorite: PropTypes.bool,
	onToggleFavorite: PropTypes.func
}


