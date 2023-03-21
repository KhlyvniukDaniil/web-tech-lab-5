import {
	StyledHeading,
	StyledLogoDottedSphere,
	StyledLogoIcon,
	StyledLogoSphere,
	StyledLogoWrapper
} from 'components/Logo/styles'


const Logo = () => {
	return (
		<StyledHeading>
			<StyledLogoWrapper to={ '/' }>
				<StyledLogoIcon>
					<StyledLogoSphere/>
					<StyledLogoDottedSphere/>
				</StyledLogoIcon>
			</StyledLogoWrapper>
		</StyledHeading>
	)
}

export default Logo
