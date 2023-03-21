import { Paragraph, SectionTitle } from 'components/index'
import styled from 'styled-components'
import { columnGap, vw } from 'assets/styles/mixins/index'
import { color } from 'assets/styles/colors'


export const StyledTitleWrapper = styled.div`
  opacity: -1;
  transform: translateY(${ vw(30, true) });
`

export const StyledSectionTitle = styled(SectionTitle)`
  position: initial;
  padding-bottom: ${ vw(15, true) };
  margin-left: 0;
  margin-bottom: ${ vw(15, true) };
`

export const StyledOfferWrapper = styled.section`
  display: grid;
  grid-auto-rows: auto;
  grid-column-gap: ${ vw(20, true) };
  position: absolute;
  top: ${ vw(800, true) };
  pointer-events: initial;
  z-index: 1;
  padding: ${ columnGap(true) };
`

export const StyledMarkeredText = styled.span`
  color: ${ color.white };
  display: block;
  font-size: inherit;
  line-height: inherit;
`

export const StyledParagraph = styled(Paragraph)`
  opacity: -1;
  transform: translateY(${ vw(50, true) });
`
