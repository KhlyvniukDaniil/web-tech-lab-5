import { handFromSky } from 'assets/images/index'
import { bp } from 'assets/styles/brakepints'
import { grid, gridCol, headerHeight, vw } from 'assets/styles/mixins/index'
import styled from 'styled-components'


export const StyledSectionWrapper = styled.section`
  ${ grid({}) };
  grid-template-rows: min-content;
  min-height: max(120vh, 1500px);
  margin-top: max(70px, ${ vw(70) });

  @media (max-width: ${ bp.mobile }) {
    margin-top: ${ vw(1000, true) };
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: ${ vw(1000, true) };
  }
`

export const StyledSection = styled.section`
  ${ gridCol(1, 13) };
  ${ grid({}) };
  grid-row-gap: 70vw;
  background-image: url(${ handFromSky });
  background-position: center top;
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: ${ vw(550) };


  & > h3 {
    margin-bottom: ${ vw(30) };
    position: initial;

    @media (max-width: ${ bp.mobile }) {
    }
  }

  @media (max-width: ${ bp.mobile }) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: initial;
  }
`

export const StyledCanvasWrapper = styled.div`
  ${ gridCol(1, -1) };
  height: 100%;
  position: relative;
  min-height: max(150vh, 1800px);
  width: 100%;

  canvas {
    width: 100%;
    height: min(calc(100vw / 16 * 9), ${ vw(850) });
    display: block;
    z-index: -1;
    position: absolute;
    top: 0;
    ${ gridCol(1, -1) };

    @media (max-width: ${ bp.mobile }) {
      top: ${ vw(375, true) };
    }
  }
`

export const StyledContent = styled.div`
  ${ gridCol(1, -1) };
  ${ grid({}) };
  position: sticky;
  top: ${ headerHeight() };
  height: 100vh;

  @media (max-width: ${ bp.mobile }) {
    display: block;
    top: ${ headerHeight(true) };
  }
`

