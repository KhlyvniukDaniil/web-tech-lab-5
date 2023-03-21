import { vw } from 'assets/styles/mixins/index'
import {
	StyledBtn,
	StyledBtnDesk,
	StyledHeading,
	StyledHeroContent,
	StyledSubParagraph,
	StyledSubTitle
} from 'components/HeroContent/styles'
import { HeroProps } from 'components/HeroContent/types'
import { HeroAnimatedText } from 'components/index'
import { ForwardedRef, forwardRef } from 'react'
import { ScrollTrigger } from 'react-gsap'
import { useMedia } from 'utils/hooks/index'


const HeroContent = forwardRef(({
	                                title,
	                                subTitle,
	                                text,
	                                isButton = true
                                }: HeroProps, ref: ForwardedRef<HTMLDivElement>) => {
	const { isMobile } = useMedia()

	return (
		<StyledHeroContent ref={ ref }>
			<ScrollTrigger start={ `center ${ vw(120) }` } end={ 'bottom bottom' } scrub>
				<HeroAnimatedText>
					<StyledHeading>{ title }</StyledHeading>
				</HeroAnimatedText>
				{ isButton && (
					<HeroAnimatedText>
						{ isMobile
							? <StyledBtn to={ '/' }>Apply for a grant <span>→</span></StyledBtn>
							: <StyledBtnDesk to={ '/' }>Apply for a grant</StyledBtnDesk>
						}
					</HeroAnimatedText>
				) }
			</ScrollTrigger>
			<ScrollTrigger start={ `center ${ vw(120) }` } end={ 'center bottom' } scrub>
				{ !isMobile && (
					<HeroAnimatedText>
						<StyledSubTitle>{ subTitle }</StyledSubTitle>
					</HeroAnimatedText>
				) }
				<HeroAnimatedText>
					<StyledSubParagraph>{ text }</StyledSubParagraph>
				</HeroAnimatedText>
			</ScrollTrigger>
		</StyledHeroContent>
	)
})

export default HeroContent
