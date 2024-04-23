import React from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon } from '../../icons/SearchIcon'
import { BellIcon } from '../../icons/BellIcon'


export const Header = () => {
  return (
	<div className="header">
		<Link to="/">Movies</Link>
		<Link to="/">Series</Link>
		<Link to="/">Documentaries</Link>
		  <div className='ml-auto'>
			  <SearchIcon />  
			  <BellIcon />
			 <div className="image"><img src="/src/assets/UserIcon.png" alt="user" /></div>
			<div className="name">Tetiana</div>  
		</div>






	</div>
  )
}
