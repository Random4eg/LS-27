import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '/src/shared/ui/Film/Film.scss'
import { Likeicon } from '../../icons/Likeicon'
import { DisLikeicon } from '../../icons/DisLikeicon'

export const Film = ({ film, toggleFavorite, toggleActiveFilm }) => {
	const [isFavorited, setisFavorited] = useState(film.isFavorited)

	const handleLike = () => {
		toggleFavorite(film.id)
		setisFavorited(!isFavorited)
	}

	const handleFilmClick = () => {
		toggleActiveFilm && toggleActiveFilm(film)
	}

	useEffect(() => {
		setisFavorited(film.isFavorited)
	}, [film.isFavorited])

	return (
		<div
			className={`film ${isFavorited ? 'isFavorited' : ''}`}
			style={{
				backgroundImage: `url(${film.image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
			onClick={handleFilmClick}
		>
			<div className='checkpoint'>
				<label>
					<button className='light' onClick={handleLike}>
						{isFavorited ? <Likeicon /> : <DisLikeicon />}
					</button>
				</label>
			</div>
			<div className='film-info'>
				<div className='film-title'>{film.title}</div>
				<div className='film-details'>
					<div className='film-year'>{film.year}</div>
					<div className='film-genre'>{film.genre}</div>
				</div>
			</div>
		</div>
	)
}

Film.propTypes = {
	film: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		year: PropTypes.string.isRequired,
		genre: PropTypes.string.isRequired,
		isFavorited: PropTypes.bool.isRequired
	}).isRequired,
	toggleFavorite: PropTypes.func.isRequired,
	toggleActiveFilm: PropTypes.func
}
