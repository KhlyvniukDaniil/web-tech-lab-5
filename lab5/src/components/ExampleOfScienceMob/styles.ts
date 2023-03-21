import { SectionTitle } from 'components/index'
import styled from 'styled-components'
import { columnGap, grid, gridCol, gridRow, outfitMedium, vw } from 'assets/styles/mixins/index'
import { bp } from 'assets/styles/brakepints'
import { color } from 'assets/styles/colors'


export const StyledSection = styled.section`
  ${ gridCol(1, 13) };
  min-height: 1000px;
  width: 100%;
`

export const StyledTitleWrapper = styled.section`
  height: fit-content;
  padding: 0 ${ columnGap(true) };
  margin-bottom: ${ vw(88, true) };
  display: block;
`

export const StyledSectionTitle = styled(SectionTitle)`
  ${ gridCol(1, 2) };
  position: initial;
  margin-bottom: ${ vw(15, true) };
`

export const StyledParagraph = styled.p`
  ${ gridCol(3, 13) };
  height: fit-content;
  margin: 0;
  ${ outfitMedium(16, color.white, 24, true) }
`

export const StyledCardWrapper = styled.div`
  ${ grid({ col: 6, row: 2, colGap: '10px', rowGap: '0', rowSize: 'auto' }) };
  ${ gridCol(2, 3) };

  width: 75%;
  margin: 0 auto;
  padding: 0 ${ columnGap(true) };

  @media (min-width: ${ parseInt(bp.lg) + 1 }px) {
    article:nth-child(odd) {
      ${ gridRow(1, 2) };
    }

    article:nth-child(even) {
      ${ gridRow(2, 3) };
    }

    article:nth-child(2) {
      ${ gridCol(2, 3) };
    }

    article:nth-child(3) {
      ${ gridCol(3, 4) };
    }

    article:nth-child(4) {
      ${ gridCol(4, 5) };
    }

    article:nth-child(5) {
      ${ gridCol(5, 6) };
    }

    article:nth-child(6) {
      ${ gridCol(6, 7) };
    }
  }

  @media (min-width: ${ parseInt(bp.md) + 1 }px) and (max-width: ${ bp.xl }) {
    width: 100%;
  }

  @media (max-width: ${ bp.lg }) {
    ${ grid({ col: 2 }) };
    width: 100%;
  }
`

export const StyledImageWrapper = styled.div`
  width: 100%;
  max-width: 100%;


  img {
    width: 100%;
    display: block;
  }

  @media (min-width: ${ bp.xxl }) {
    box-shadow: 0px -150px 200px 200px ${ color.black };
  }
`
