import { Paragraph, SectionTitle } from 'components/index'
import {
	StyledCardList,
	StyledCardWrapper,
	StyledMarker,
	StyledTitleWrapper
} from 'components/ListSectionLayout/styles'
import React, { useMemo } from 'react'
import { Tween } from 'react-gsap'


const ListSectionLayout = ({ textContent, title }: ListSectionLayoutProps) => {
	const markers: string[] = [ '➊', '➋', '➌', '➍' ]
	const fadeIn = useMemo(() => ({
		opacity: 1,
		translateY: 0,
	}), [])

	const cards = textContent.map((text, i) => (
		<StyledCardWrapper key={ i }>
			<StyledMarker>{ markers[i] }</StyledMarker>
			<Paragraph>
				{ text }
			</Paragraph>
		</StyledCardWrapper>
	))

	return (
		<StyledTitleWrapper>
			<SectionTitle>{ title }</SectionTitle>
			<StyledCardList>
				<Tween to={ fadeIn } stagger={ 0.5 }>{ cards }</Tween>
			</StyledCardList>
		</StyledTitleWrapper>
	)
}

export default ListSectionLayout