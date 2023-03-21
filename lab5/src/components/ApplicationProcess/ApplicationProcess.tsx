import {
	StyledCard,
	StyledCardList,
	StyledCardWrapper,
	StyledDate,
	StyledSection,
	StyledSectionTitle
} from 'components/ApplicationProcess/styles'
import { Paragraph } from 'components/index'


const ApplicationProcess = () => {
	return (
		<StyledSection>
			<StyledSectionTitle>Lorem ipsum dolor sit amet, consectetur.</StyledSectionTitle>
			<StyledCardList>
				<StyledCardWrapper>
					<StyledCard>
						<StyledDate>Lorem ipsum dolor</StyledDate>
						<Paragraph>
							Lorem ipsum dolor sit amet,
							consectetur adipisicing elit.
						</Paragraph>
					</StyledCard>
				</StyledCardWrapper>
				<StyledCardWrapper>
					<StyledCard>
						<StyledDate>31 Oct 2022</StyledDate>
						<Paragraph>
							Lorem ipsum dolor sit amet,
							consectetur adipisicing elit.
						</Paragraph>
					</StyledCard>
				</StyledCardWrapper>
				<StyledCardWrapper>
					<StyledCard>
						<StyledDate>7 days after our call</StyledDate>
						<Paragraph>
							Lorem ipsum dolor sit amet,
							consectetur adipisicing elit.
						</Paragraph>
					</StyledCard>
				</StyledCardWrapper>
				<StyledCardWrapper>
					<StyledCard>
						<StyledDate>9 Nov 2022</StyledDate>
						<Paragraph>
							Lorem ipsum dolor sit amet,
							consectetur adipisicing elit.
						</Paragraph>
					</StyledCard>
				</StyledCardWrapper>
				<StyledCardWrapper>
					<StyledCard>
						<StyledDate>17 Nov 2022 - 25 Nov 2022</StyledDate>
						<Paragraph>
							Lorem ipsum dolor sit amet,
							consectetur adipisicing elit.
						</Paragraph>
					</StyledCard>
				</StyledCardWrapper>
				<StyledCardWrapper>
					<StyledCard>
						<StyledDate>26 Nov 2022 - 10 Dec 2022</StyledDate>
						<Paragraph>
							Lorem ipsum dolor sit amet,
							consectetur adipisicing elit.
						</Paragraph>
					</StyledCard>
				</StyledCardWrapper>
				<StyledCardWrapper>
					<StyledCard>
						<StyledDate>10 Dec 2022</StyledDate>
						<Paragraph>
							Lorem ipsum dolor sit amet,
							consectetur adipisicing elit.
						</Paragraph>
					</StyledCard>
				</StyledCardWrapper>
			</StyledCardList>
		</StyledSection>
	)
}

export default ApplicationProcess
