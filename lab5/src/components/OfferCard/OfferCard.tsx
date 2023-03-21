import { StyledCard, StyledCardWrapper, StyledMarkeredText } from 'components/OfferCard/styles'
import React, { useMemo }                                    from 'react'
import { ScrollTrigger, Timeline, Tween }                    from 'react-gsap'


const OfferCard = ({ title, text }: { title: string, text: string }) => {
	const fadeIn = useMemo(() => ({
		opacity: 1,
		translateY: '0',
	}), [])
	const fadeout = useMemo(() => ({
		opacity: 0,
	}), [])

	return (
		<ScrollTrigger start={ `top center` } end={ `bottom center` } scrub>
			<Timeline
				target={
					<StyledCardWrapper>
						<StyledCard>
							<StyledMarkeredText>{ title }</StyledMarkeredText>
							{ text }
						</StyledCard>
					</StyledCardWrapper>
				}
				labels={ [ { label: '1', position: 0 }, { label: '+=1', position: 1 } ] }
			>
				<Tween to={ { ...fadeIn } } position={ 0 } duration={ 0.7 }/>
				<Tween to={ { ...fadeout } } position={ 1 } duration={ 0.5 }/>
			</Timeline>
		</ScrollTrigger>
	)
}

export default OfferCard