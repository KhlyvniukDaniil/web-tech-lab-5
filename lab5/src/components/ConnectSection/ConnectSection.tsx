import { InfoIcon } from 'assets/images/index'
import { Form } from 'components/index'
import {
	StyledCanvasWrapper,
	StyledInfoBtnWrapper,
	StyledParagraph,
	StyledSection,
	StyledTitle
} from 'components/ConnectSection/styles'
import { lazy, Suspense, useRef } from 'react'
import { useMedia } from 'utils/hooks/index'


const ConnectSectionBgAnimation = lazy(() => import('components/ConnectSection/bgAnimation/ConnectSectionBgAnimation'))

const ConnectSection = ({ scrollTo }: { scrollTo: () => void }) => {
	const cnvWrapperRef = useRef<HTMLDivElement>(null)
	const { isDesktop } = useMedia()

	return (
		<StyledSection>
			<>
				<StyledInfoBtnWrapper onClick={ scrollTo }>
					{ isDesktop && <InfoIcon/> }
				</StyledInfoBtnWrapper>
				<StyledCanvasWrapper ref={ cnvWrapperRef }>
					{ isDesktop && (
						<Suspense>
							<ConnectSectionBgAnimation currSection={ cnvWrapperRef?.current }/>
						</Suspense>
					) }
				</StyledCanvasWrapper>
			</>
			<StyledTitle>{ isDesktop ? 'Apply for the grant' : 'Let\'s talk and get to know each other' }</StyledTitle>
			<StyledParagraph>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi fuga odio placeat veniam. Cum
				cupiditate dolorem eius, esse eum expedita explicabo id impedit incidunt, iure maxime nemo quos veritatis! Est
				illo reprehenderit vel veniam?
			</StyledParagraph>
			<Form/>
		</StyledSection>
	)
}

export default ConnectSection
