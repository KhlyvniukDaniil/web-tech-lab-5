import { useRef } from 'react'
import { ScrollTrigger, Tween } from 'react-gsap'

import {
	StyledMarkeredText,
	StyledOfferWrapper,
	StyledParagraph,
	StyledSectionTitle,
	StyledTitleWrapper
} from 'components/OfferMob/styles'


const Offer = () => {
	const currSectionRef = useRef<HTMLDivElement>(null)
	const fadeIn = useRef({
		opacity: 1,
		translateY: 0,
	})

	return (
		<StyledOfferWrapper ref={ currSectionRef }>
			<ScrollTrigger start={ `top 75%` } end={ `bottom 75%` } scrub>
				<Tween to={ fadeIn.current }>
					<StyledTitleWrapper>
						<StyledSectionTitle>What we offer</StyledSectionTitle>
					</StyledTitleWrapper>
					<StyledParagraph>
						<StyledMarkeredText>Attractive grant program </StyledMarkeredText>
						We offer a funding and resources for scientists who need financial and technological support in the
						field of big scale computing combined with unique mentoring opportunities.
					</StyledParagraph>
				</Tween>
				<Tween to={ fadeIn.current }>
					<StyledParagraph>
						<StyledMarkeredText>Promotion for your research </StyledMarkeredText>
						Our team will promote your project to raise awareness and help you gain recognition.
					</StyledParagraph>
				</Tween>
				<Tween to={ fadeIn.current }>
					<StyledParagraph>
						<StyledMarkeredText>Proven results </StyledMarkeredText>
						We provide a platform that grants scientists from around the world access to computers in the
						Golem
						Network, following the example of the Life On Golem project that helps scientists to find answers
						to
						questions about the origins of life.
					</StyledParagraph>
				</Tween>
				<Tween to={ fadeIn.current }>
					<StyledParagraph>
						<StyledMarkeredText>Flexibility </StyledMarkeredText>
						You’re the one to decide whether to use 1 or 13 thousand processor cores available in our network.
						●
						And if you’re missing resources, your task can automatically scale to more capacity.
					</StyledParagraph>
				</Tween>
				<Tween to={ fadeIn.current }>
					<StyledParagraph>
						<StyledMarkeredText>On-demand scalability </StyledMarkeredText>
						You can start by using 10 computers in the Golem Network, and then scale up to 200 computers for a
						few hours when you need additional power. ● When no longer needed, you can reduce the number of
						resources used to the original value.
					</StyledParagraph>
				</Tween>
				<Tween to={ fadeIn.current }>
					<StyledParagraph>
						<StyledMarkeredText>Instantly available </StyledMarkeredText>
						Our network consists of computers from all over the world and there’s no such mechanism as queuing
						tasks.
						● Provider computers can perform several independent tasks simultaneously for many requesters!
					</StyledParagraph>
				</Tween>
			</ScrollTrigger>
		</StyledOfferWrapper>
	)
}

export default Offer
