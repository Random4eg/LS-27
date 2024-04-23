import  {Film}  from '../../shared/ui/Film/Film'
import { films } from '../../database/films'
import { Header } from '../../shared/ui/Header/Header'
import '/src/pages/home/Home.scss'
import { BigDislikeIcon } from '../../shared/icons/BigDislikeIcon'
import { BigLikeIcon } from '../../shared/icons/BigLikeIcon'

export const Home = () => {
	const listItems = films.map(film => <Film key={film.id} film={film} />)

	return (
		<>
			<section className='home'>
				<Header />
				<div className='title'>Insider</div>
				<div className='desc'>2022 | Comedy horror | 1 Season</div>
				<button>Watch now</button>
				<button className='dislike'>
					<BigDislikeIcon />{' '}
				</button>
				<BigLikeIcon />
			</section>
			<div className='trending'>
				<div className='trending-list'>{listItems}</div>
			</div>
			<div className='main-trend'>sjdhfgjksdhf</div>
		</>
	)
}
