import {
	StyledCard,
	StyledIconWrapper,
	StyledText
} from 'components/ExampleOfScienceMob/ExampleOfScienceCardMob/styles'
import { ExampleOfScienceCardProps } from 'components/ExampleOfScienceMob/ExampleOfScienceCardMob/types'


const ExampleOfScienceCard = ({
	                              icon: Icon,
	                              text,
	                              iconAlign = 'flex-start',
	                              cardAlign = 'flex-start',
                              }: ExampleOfScienceCardProps) => {
	return (
		<StyledCard $align={ cardAlign }>
			<StyledIconWrapper $align={ iconAlign }>{ Icon }</StyledIconWrapper>
			<StyledText>{ text }</StyledText>
		</StyledCard>
	)
}

export default ExampleOfScienceCard