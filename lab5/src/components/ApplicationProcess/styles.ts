import { desert } from 'assets/images/index'
import { color } from 'assets/styles/colors'
import { columnGap, grid, gridCol, outfitBold, outfitMedium, vw } from 'assets/styles/mixins/index'
import { SectionTitle } from 'components/index'
import styled from 'styled-components'


export const StyledSection = styled.section`
  ${ grid({}) };
  background-image: url(${ desert });
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  padding: ${ vw(286) } 0 ${ vw(430) };
  min-height: 120vh;
`

export const StyledSectionTitle = styled(SectionTitle)`
  ${ gridCol(1, 4) };
  margin-left: ${ columnGap() };
`

export const StyledCardList = styled.div`
  ${ gridCol(5, 11) };
  ${ grid({ col: 2 }) };
  grid-auto-rows: min-content;

  & > div {
    &:nth-child(odd) {
      & > article {
        text-align: right;
        padding-right: calc(${ columnGap() });
        ${ gridCol(1, 2) };

        &:before {
          right: calc(-1 * ${ columnGap() });
        }
      }
    }

    &:nth-child(even) {
      & > article {
        text-align: left;
        padding-left: calc(${ columnGap() });
        ${ gridCol(2, -1) };

        &:before {
          left: calc(-1 * ${ columnGap() });
        }
      }
    }
  }
`

export const StyledCardWrapper = styled.div`
  grid-column: span 2;
  grid-row: span 1;
  ${ grid({ col: 2 }) };
  height: fit-content;
`

export const StyledCard = styled.article`
  grid-column: span 1;
  position: relative;
  height: fit-content;
  max-width: ${ vw(350) };

  h5 {
    ${ outfitBold(20, color.white, 34) };
    letter-spacing: ${ vw(3) };
    margin: 0;
  }

  p {
    ${ outfitMedium(28, color.white, 34) };
    margin: 0;
  }

  &:before {
    content: '';
    clip-path: circle(50%);
    background-color: ${ color.white };
    width: ${ columnGap() };
    height: ${ columnGap() };

    position: absolute;
    top: 0;
  }
`

export const StyledDate = styled.h5`
`
