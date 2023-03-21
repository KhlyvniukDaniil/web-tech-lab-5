import { ListSectionLayout } from 'components/index'
import { StyledCanvasWrapper, StyledContent, StyledSection, StyledSectionWrapper } from 'components/OurSupport/styles'
import { lazy, Suspense, useRef } from 'react'
import { ScrollTrigger } from 'react-gsap'


const OurSupportBgAnimation = lazy(() => import('components/AnimatedCanvas/index'))

const OurSupport = () => {
	const currSectionRef = useRef<HTMLDivElement>(null)

	return (
		<ScrollTrigger start={ `top center` } end={ `bottom bottom` }>
			<StyledSectionWrapper ref={ currSectionRef }>

				<StyledSection>
					<StyledCanvasWrapper>
						<StyledContent>
							<Suspense>
								<OurSupportBgAnimation
									currSection={ currSectionRef.current }
									frameCount={ 151 }
									pathToFrames={ '/ourSupport' }
								/>
							</Suspense>

							<ListSectionLayout
								title={ 'Lorem ipsum dolor sit amet, consectetur adipisicing.' }
								textContent={ [
									'Lorem ipsum dolor sit amet, consectetur.',
									'Lorem ipsum dolor sit amet, consectetur.',
									'Lorem ipsum dolor sit amet, consectetur.',
									'Lorem ipsum dolor sit amet, consectetur.',
								] }
							/>
						</StyledContent>
					</StyledCanvasWrapper>
				</StyledSection>
			</StyledSectionWrapper>
		</ScrollTrigger>
	)
}

export default OurSupport
