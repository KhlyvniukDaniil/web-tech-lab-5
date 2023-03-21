import { AtomIcon, BioInformaticsIcon, DNAIcon, DrugIcon, MaterialIcon, SpiralIcon, whiteBlocks } from 'assets/images/index'
import { vw } from 'assets/styles/mixins/index'
import {
	StyledImageWrapper,
	StyledParagraph,
	StyledSection,
	StyledSectionTitle,
	StyledTitleWrapper
} from 'components/ExampleOfScience/styles'
import { ExampleOfScienceCard } from 'components/index'
import { useMedia } from 'utils/hooks/index'


const ExampleOfScience = () => {
	const { isMobile } = useMedia()

	return (
		<StyledSection>
			<StyledTitleWrapper>
				<StyledSectionTitle>Lorem ipsum dolor.</StyledSectionTitle>
				<StyledParagraph>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi laborum minima numquam pariatur
					praesentium saepe. A, eius, reprehenderit?
				</StyledParagraph>
			</StyledTitleWrapper>
			<ExampleOfScienceCard
				text={ 'Lorem ipsum dolor.' }
				icon={ <SpiralIcon/> }
				cardPosition={ {
					top: '13vw',
					left: '26.6%'
				} }
				stickHeight={ vw(146.666) }
			/>
			<ExampleOfScienceCard
				text={ 'Lorem ipsum dolor.' }
				icon={ <DrugIcon/> }
				cardPosition={ {
					top: '19vw',
					left: '34.6%'
				} }
				stickHeight={ vw(47.333) }
			/>
			<ExampleOfScienceCard
				text={ 'Lorem ipsum dolor.' }
				icon={ <MaterialIcon/> }
				cardPosition={ {
					top: '12vw',
					left: '39.3%'
				} }
				stickHeight={ vw(89.333) }
			/>
			<ExampleOfScienceCard
				text={ 'Lorem ipsum dolor.' } icon={ <DNAIcon/> } cardPosition={ {
				top: '20vw',
				left: '49.2%'
			} }
				stickHeight={ vw(29.333) }
			/>
			<ExampleOfScienceCard
				text={ 'Lorem ipsum dolor.' }
				icon={ <AtomIcon/> } cardPosition={ {
				top: '13vw',
				left: '56.5%'
			} }
				stickHeight={ vw(96.666) }
			/>
			<ExampleOfScienceCard
				text={ 'Lorem ipsum dolor.' }
				icon={ <BioInformaticsIcon/> }
				iconAlign={ isMobile ? 'initial' : 'flex-end' }
				cardPosition={ {
					top: '17vw',
					right: '26.4%'
				} }
				stickHeight={ vw(32.666) }
			/>
			<StyledImageWrapper>
				<img alt={ 'whiteBlocks' } src={ whiteBlocks }/>
			</StyledImageWrapper>
		</StyledSection>
	)
}

export default ExampleOfScience
