// MainTrend.jsx
import PropTypes from 'prop-types'
import '/src/pages/trending/MainTrend/MainTrend.scss'
import { StarIcon } from '../../../shared/icons/StarIcon'

export const MainTrend = ({ activeFilm }) => {
	if (!activeFilm) {
		return null
	}

	const { title, image, year, genre, playback, description, star } = activeFilm

	return (
		<div className='mt-box'>
			<div className='print'>
				<img className='print' src={image} alt={title} />
			</div>
			<div className='trend-box'>
				<div className='title-star'>
					<div className='title'>{title}</div>
					<div className='star'>
						<StarIcon /> {star}
					</div>
				</div>
				<div className='data'>
					<div className='year'>{year}</div>
					<div className='genre'>{genre}</div>
					<div className='playback'>{playback}</div>
				</div>
				<div className='description'>{description}</div>
				<div className='btn'>
					<button className='home__btn'>Watch now</button>
					<button className='biglike'>likeIcon</button>
				</div>
			</div>
		</div>
	)
}
MainTrend.propTypes = {
	activeFilm: PropTypes.shape({
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		year: PropTypes.number.isRequired,
		genre: PropTypes.string.isRequired,
		playback: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		star: PropTypes.number.isRequired
	}).object
}