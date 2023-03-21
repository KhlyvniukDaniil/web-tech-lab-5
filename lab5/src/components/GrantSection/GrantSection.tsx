import React, { useEffect, useRef, useState } from 'react'
import { useMedia } from 'utils/hooks/index'
import {
	StyledButton,
	StyledGrantWrapper,
	StyledImageWrapper,
	StyledLink,
	StyledPrice,
	StyledSection,
	StyledShadow,
	StyledTextWrapper,
	StyledTitle,
} from 'components/GrantSection/styles'

import { vw } from 'assets/styles/mixins/index'
import { OfferMob } from 'components/index'


const GrantSection = () => {
	const [ textOpacity, setTextOpacity ] = useState<number>(1)
	const textWrapperRef = useRef<HTMLDivElement>(null)
	const currSection = useRef<HTMLDivElement>(null)
	const shadowRef = useRef<HTMLDivElement>(null)
	const buttonRef = useRef<HTMLAnchorElement>(null)
	const windowHeight = window.innerHeight
	const { isMobile, isDesktop } = useMedia()

	const animation = () => {
		if (currSection?.current) {
			const scrollTop = -currSection.current.getBoundingClientRect().y + windowHeight / 2
			const maxScrollTop = currSection.current.getBoundingClientRect().y + currSection.current.offsetHeight - (windowHeight - 250)
			const scrollFraction = (scrollTop / maxScrollTop)
			const fadeProgress = Math.floor(scrollFraction * 100)

			if (textWrapperRef?.current && shadowRef?.current) {
				if (fadeProgress >= 40) {
					shadowRef.current.style.transform = `translateX(${ Math.min(100, fadeProgress - 40) }%)`
					textWrapperRef.current.style.transform = `translateY(${ vw(Math.max(-170, -fadeProgress * 1.7), isMobile) })`
					textWrapperRef.current.style.transform =
						`translateY(${ vw(Math.max(-300, -fadeProgress * 5), isMobile) })`
				}
				if (fadeProgress >= 30 && buttonRef?.current) {
					buttonRef.current.style.transform = `translateY(${ vw(Math.max(-400, -(fadeProgress * 2)), isMobile) })`
				}
				// if (fadeProgress > 700) {
				// 	setTextOpacity(() => Math.min(1, Math.max(0, (2 - fadeProgress / 700))))
				// }
			}
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', animation)
		return () => window.removeEventListener('scroll', animation)
	}, [])

	return (
		<StyledSection ref={ currSection }>
			<StyledImageWrapper>
				{ isMobile && (
					<>
						<StyledButton style={ { opacity: textOpacity } } ref={ buttonRef } to={ '/' }>
							Apply for a grant
						</StyledButton>
						<OfferMob/>
					</>
				) }
			</StyledImageWrapper>
			<StyledGrantWrapper>
				<StyledTextWrapper ref={ textWrapperRef }>
					<StyledShadow ref={ shadowRef }/>
					<StyledPrice>$100,000!</StyledPrice>
					{ isDesktop && (
						<>
							<StyledTitle>grant plus budget for an enormous computing power for your research project!</StyledTitle>
							<StyledLink to={ '/' }>Apply for a grant →</StyledLink>
						</>
					) }
				</StyledTextWrapper>
			</StyledGrantWrapper>
		</StyledSection>
	)
}

export default GrantSection
