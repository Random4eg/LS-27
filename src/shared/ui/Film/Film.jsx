import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '/src/shared/ui/Film/Film.scss'
import { Likeicon } from '../../icons/Likeicon'
import { DisLikeicon } from '../../icons/DisLikeicon'

export const Film = ({ film }) => {
	const [isLiked, setIsLiked] = useState(false) // Додали стан для відстеження, чи вподобано фільм

	const handleLike = () => {
		setIsLiked(!isLiked) // Змінюємо стан при кожному кліку
	}

	const handleUnFavorite = () => {
		console.log('handleUnFavorite')
	}

	return (
		<div
			className='film'
			style={{
				backgroundImage: `url(${film.image})`, // Змінюємо зображення в залежності від стану
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
		>
			<div className='checkpoint'>
				<label>
					<button className='light' onClick={handleLike}>
						{isLiked ? <DisLikeicon /> : <Likeicon />}{' '}
						{/* Змінюємо іконку в залежності від стану */}
					</button>
				</label>
			</div>
			<div className='film-info'>
				<div>{film.title}</div>
				<div>{film.year}</div>
				<div>{film.genre}</div>
				{film.isFavorited && (
					<div onClick={handleUnFavorite}>UnCheck favorite</div>
				)}
			</div>
		</div>
	)
}

Film.propTypes = {
	film: PropTypes.object.isRequired
}
