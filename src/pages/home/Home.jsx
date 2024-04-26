// Home.jsx
import { useState } from 'react'
import { Film } from '../../shared/ui/Film/Film'
import { filmsData, toggleFavorite } from '../../database/films'
import { Header } from '../../shared/ui/Header/Header'
import { BigDislikeIcon } from '../../shared/icons/BigDislikeIcon'
import { BigLikeIcon } from '../../shared/icons/BigLikeIcon'
import '/src/pages/home/Home.scss'
import { Link } from 'react-router-dom'
import { Watching } from './Watching/Watching'

export const Home = () => {
	const [isFavorited, setIsFavorited] = useState(false)

	const toggleLike = () => {
		setIsFavorited(!isFavorited)
	}

	const likeIcon = isFavorited ? <BigLikeIcon /> : <BigDislikeIcon />
	const listItems = filmsData.map(film => (
		<Film key={film.id} film={film} toggleFavorite={toggleFavorite} />
	))

	return (
		<>
			<section className='home'>
				<div className='home-container'>
					<Header />
					<div className='card'>
						<div className='title'>Insider</div>
						<div className='desc'>2022 | Comedy horror | 1 Season</div>
						<div className='btn'>
							<button className='home__btn'>Watch now</button>
							<button className='biglike' onClick={toggleLike}>
								{likeIcon}
							</button>
						</div>
					</div>
				</div>
				<Link to='/Trending' className='track'>
					Trending
				</Link>
				<div className='trending-list'>{listItems}</div>

				<Watching />
			</section>
		</>
	)
}
