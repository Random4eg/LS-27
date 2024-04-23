import React, { useState } from 'react'
import { Film } from '../../shared/ui/Film/Film'
import { films } from '../../database/films'
import { Header } from '../../shared/ui/Header/Header'
import { BigDislikeIcon } from '../../shared/icons/BigDislikeIcon'
import { BigLikeIcon } from '../../shared/icons/BigLikeIcon'
import '/src/pages/home/Home.scss'
import { Link } from 'react-router-dom'

export const Home = () => {
	const [isLiked, setIsLiked] = useState(false)

	const toggleLike = () => {
		setIsLiked(!isLiked)
	}
	const likeIcon = isLiked ? <BigLikeIcon /> : <BigDislikeIcon />
	const listItems = films.map(film => <Film key={film.id} film={film} />)

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
				<Link to='/Trending' className='trending'>
					{' '}
					Trending
					<div className='trending-list'>{listItems}</div>
				</Link>
				<section className='main-trend'>
					Continue watching
					<div className='watch-box'>
						<div className='watch-item'>
							<button className='biglike' onClick={toggleLike}>
								{likeIcon}
							</button>
						</div>
						<div className='watch-item'>
							<button className='biglike' onClick={toggleLike}>
								{likeIcon}
							</button>
						</div>
						<div className='watch-item'>
							<button className='biglike' onClick={toggleLike}>
								{likeIcon}
							</button>
						</div>
					</div>
				</section>
			</section>
		</>
	)
}
