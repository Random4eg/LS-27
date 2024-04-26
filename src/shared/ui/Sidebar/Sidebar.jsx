import { Link } from "react-router-dom"
import { LogoIcon } from "../../icons/Logo/LogoIcon"
import { HomeIcon } from "../../icons/HomeIcon"
import { FavoritesIcon } from "../../icons/FavoritesIcon"
import { TrendingIcon } from "../../icons/TrendingIcon"
import { ComingIcon } from "../../icons/ComingIcon"
import { ComunityIcon } from "../../icons/ComunityIcon"
import { SocialIcon } from "../../icons/SocialIcon"
import { SettingsIcon } from "../../icons/SettingsIcon"
import { LogoutIcon } from '../../icons/LogoutIcon'


export const Sidebar = () => {
	return (
		<div className='sidebar'>
			<LogoIcon />
			<div className='nav'>
				<div className='sidebar__page'>
					<li>
						<Link to='/Home'>
							<HomeIcon /> Home
						</Link>
					</li>
					<li>
						<Link to='/Favourites'>
							<FavoritesIcon /> Favourites
						</Link>
					</li>
					<li>
						{' '}
						<Link to='/Trending'>
							<TrendingIcon /> Trending
						</Link>
					</li>
					<li>
						<Link to='/'>
							<ComingIcon /> Coming soon
						</Link>
					</li>
				</div>
				<div className='sidebar__social'>
					<li>
						<Link to='/'>
							<ComunityIcon /> Community
						</Link>
					</li>
					<li>
						<Link to='/'>
							<SocialIcon /> Social
						</Link>
					</li>
				</div>
				<div className='sidebar__set'>
					<li>
						<Link to='/'>
							<SettingsIcon /> Settings
						</Link>
					</li>
					<li>
						<Link to='/'>
							<LogoutIcon /> Logout
						</Link>
					</li>
				</div>
			</div>
		</div>
	)
}
