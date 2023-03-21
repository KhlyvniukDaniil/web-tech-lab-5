import { columnGap, grid, gridCol, vw } from 'assets/styles/mixins/index'
import { SectionTitle } from 'components/index'
import styled from 'styled-components'


export const StyledOfferWrapper = styled.section`
  ${ grid({}) };
  position: relative;
  min-height: 250vh;
`

export const StyledCanvasWrapper = styled.div`
  ${ gridCol(3, 11) };
  position: absolute;
  top: 0;
  right: max(40px, ${ vw(40) });
  left: max(40px, ${ vw(40) });
  min-height: 250vh;
  z-index: 1;

  canvas {
    max-width: 90%;
    height: 100vh;
    display: block;
    margin: 0 auto;
    z-index: -1;
    position: sticky;
    top: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 20%);
    box-shadow: inset 10px -200px 90px -138px rgba(0, 0, 0, 1);

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      background: radial-gradient(circle, rgba(0, 0, 0, 0) 21%, rgba(0, 0, 0, 1) 51%);
      z-index: 5;
    }
  }
`

export const StyledSectionTitle = styled(SectionTitle)`
  ${ gridCol(1, 3) };
  margin-left: ${ columnGap() };
`

export const StyledOfferCardList = styled.div`
  ${ grid({ col: 8 }) };
  row-gap: 0;
  grid-template-rows: auto;
  justify-content: space-between;
  align-content: flex-start;
  position: absolute;
  top: 50vh;
  left: 0;
  right: 0;
`
