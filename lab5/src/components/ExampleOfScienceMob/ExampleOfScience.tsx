import {
	AtomIcon,
	BioInformaticsIcon,
	DNAIcon,
	DrugIcon,
	MaterialIcon,
	SpiralIcon,
	whiteBlocksOld
} from 'assets/images/index'
import ExampleOfScienceCard from 'components/ExampleOfScienceMob/ExampleOfScienceCardMob/index'
import {
	StyledCardWrapper,
	StyledImageWrapper,
	StyledParagraph,
	StyledSection,
	StyledSectionTitle,
	StyledTitleWrapper
} from 'components/ExampleOfScienceMob/styles'


const ExampleOfScience = () => {
	return (
		<StyledSection>
			<StyledTitleWrapper>
				<StyledSectionTitle>Lorem ipsum.</StyledSectionTitle>
				<StyledParagraph>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolor dolorem eaque harum nemo quam
					recusandae veniam. Ea, expedita vitae.
				</StyledParagraph>
			</StyledTitleWrapper>
			<StyledCardWrapper>
				<ExampleOfScienceCard
					text={ 'Lorem ipsum.' } icon={ <SpiralIcon/> }
				/>
				<ExampleOfScienceCard
					text={ 'Lorem ipsum.' } icon={ <DrugIcon/> }
				/>
				<ExampleOfScienceCard
					text={ 'Lorem ipsum. Lorem ipsum.' } icon={ <MaterialIcon/> }
				/>
				<ExampleOfScienceCard
					text={ 'Lorem ipsum.' } icon={ <DNAIcon/> }
				/>
				<ExampleOfScienceCard
					text={ 'Lorem ipsum.' }
					cardAlign={ 'initial' }
					icon={ <AtomIcon/> }
				/>
				<ExampleOfScienceCard
					text={ 'Lorem ipsum.' }
					icon={ <BioInformaticsIcon/> }
					iconAlign={ 'initial' }
					cardAlign={ 'initial' }
				/>
			</StyledCardWrapper>
			<StyledImageWrapper>
				<img alt={ 'whiteBlocks' } src={ whiteBlocksOld }/>
			</StyledImageWrapper>
		</StyledSection>
	)
}

export default ExampleOfScience
