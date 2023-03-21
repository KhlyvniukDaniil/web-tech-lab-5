import { bp } from 'assets/styles/brakepints'
import { color } from 'assets/styles/colors'
import { columnGap, grid, gridCol, outfitMedium, vw } from 'assets/styles/mixins/index'
import { SectionTitle } from 'components/index'
import styled from 'styled-components'


export const StyledSection = styled.section`
  ${ gridCol(1, 13) };
  max-height: 120vh;
  width: 100%;
  position: relative;

  @media (max-width: ${ bp.md }) {
    ${ grid({ col: 2 }) };
  }

  article:nth-child(even) {
    margin-left: ${ columnGap() };
  }

  article:nth-child(odd) {
    margin-right: ${ columnGap() };
  }
`

export const StyledTitleWrapper = styled.section`
  ${ grid({}) };
  width: 100%;
  height: fit-content;
  margin-bottom: ${ vw(270) };
  padding: 0 ${ columnGap() };

  @media (max-width: ${ bp.md }) {
    ${ gridCol(1, -1) };
    display: block;
    margin-bottom: 50px;
  }
`

export const StyledSectionTitle = styled(SectionTitle)`
  ${ gridCol(1, 2) };
  position: initial;
  font-size: ${ vw(32) };
  line-height: ${ vw(40) };

  @media (max-width: ${ bp.md }) {
    margin-bottom: 15px;
  }
`

export const StyledParagraph = styled.p`
  ${ gridCol(3, 11) };
  ${ outfitMedium(32, color.lightgray, 40) };
  height: fit-content;
  margin: 0;

  @media (max-width: ${ bp.lg }) {
    ${ gridCol(3, -1) };
  }

  @media (max-width: ${ bp.md }) {
    font-size: 2.8rem;
    line-height: 3.4rem;
  }
`

export const StyledImageWrapper = styled.div`
  width: 100%;
  max-width: 100%;

  img {
    width: 100%;
    display: block;
  }

  @media (max-width: ${ bp.md }) {
    ${ gridCol(1, -1) };
  }
`
