import { StyledCard, StyledIconWrapper, StyledText } from 'components/ExampleOfScienceCard/styles'
import { ExampleOfScienceCardProps }                 from 'components/ExampleOfScienceCard/types'


const ExampleOfScienceCard = ({
	icon: Icon,
	text,
	iconAlign = 'flex-start',
	cardPosition,
	stickHeight
}: ExampleOfScienceCardProps) => {
	return (
		<StyledCard $align={ iconAlign } $stickHeight={ stickHeight } $cardPosition={ cardPosition }>
			<StyledIconWrapper $align={ iconAlign }>{ Icon }</StyledIconWrapper>
			<StyledText>{ text }</StyledText>
		</StyledCard>
	)
}

export default ExampleOfScienceCard