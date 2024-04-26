import { useState } from 'react'
import { SearchIcon } from '../../icons/SearchIcon'
import { BellIcon } from '../../icons/BellIcon'

export const Header = () => {
	const [isSearchOpen, setIsSearchOpen] = useState(false)

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen)
	}

	return (
		<section className='header'>
			<div className='header__link'>
				<div>Movies</div>
				<div>Series</div>
				<div>Documentaries</div>
			</div>
			<div className='user__link'>
				<label className='search' onClick={toggleSearch}>
					<SearchIcon />
				</label>
				{isSearchOpen && (
					<div className='search-input'>
						{/* Place your input field here */}
						<input type='text' placeholder='Search...' />
					</div>
				)}
				<div className='reminder'>
					<BellIcon />
				</div>
				<div className='image'>
					<img src='/src/assets/UserIcon.png' alt='user' />
				</div>
				<div className='name'>Tetiana</div>
			</div>
		</section>
	)
}
