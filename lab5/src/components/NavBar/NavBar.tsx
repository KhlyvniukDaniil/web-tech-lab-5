import { ROUTES } from 'app/App/routes'
import { useMedia } from 'utils/hooks/index'
import { StyledLink, StyledList, StyledNavBar } from 'components/NavBar/styles'


const NavBar = () => {
	const { isDesktop } = useMedia()

	return isDesktop ? (
		<StyledNavBar>
			<StyledList>
				<li><StyledLink to={ ROUTES.ABOUT }>About</StyledLink></li>
				<li><StyledLink to={ ROUTES.MEDIA_KIT }>Media kit</StyledLink></li>
				<li><StyledLink to={ ROUTES.JOIN }>Join</StyledLink></li>
				<li><StyledLink to={ ROUTES.GRANT }>Get a grant</StyledLink></li>
			</StyledList>
		</StyledNavBar>
	) : null
}

export default NavBar
