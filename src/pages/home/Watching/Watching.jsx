import { useState } from 'react'

import './Watching.scss'
import { BigLikeIcon } from '../../../shared/icons/BigLikeIcon'
import { BigDislikeIcon } from '../../../shared/icons/BigDislikeIcon'

export const Watching = () => {
	const [isFavoritedArray, setIsFavoritedArray] = useState([
		false,
		false,
		false
	])

	const toggleLike = index => {
		const newArray = [...isFavoritedArray]
		newArray[index] = !newArray[index]
		setIsFavoritedArray(newArray)
	}

	return (
		<div>
			{' '}
			<section className='watch-trend'>
				Continue watching
				<div className='watch-box'>
					<div className='watch-item'>
						<label className='watch-like'>
							<button className='biglike' onClick={() => toggleLike(0)}>
								{isFavoritedArray[0] ? <BigLikeIcon /> : <BigDislikeIcon />}
							</button>
						</label>
					</div>
					<div className='watch-item'>
						<label className='watch-like'>
							<button className='biglike' onClick={() => toggleLike(1)}>
								{isFavoritedArray[1] ? <BigLikeIcon /> : <BigDislikeIcon />}
							</button>
						</label>
					</div>
					<div className='watch-item'>
						<label className='watch-like'>
							<button className='biglike' onClick={() => toggleLike(2)}>
								{isFavoritedArray[2] ? <BigLikeIcon /> : <BigDislikeIcon />}
							</button>
						</label>
					</div>
				</div>
			</section>
		</div>
	)
}
