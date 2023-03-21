import { bp } from 'assets/styles/brakepints'
import { grid, gridCol, headerHeight } from 'assets/styles/mixins/index'
import styled from 'styled-components'


export const StyledCanvasWrapper = styled.div`
  ${ gridCol(2, 12) };
  ${ grid({ col: 10 }) };

  position: sticky;
  top: ${ headerHeight() };
  width: 100%;
  height: 100vh;
  z-index: 1;


  canvas {
    ${ gridCol(1, 11) };
    width: 100%;
    display: block;
  }

  @media (max-width: ${ bp.mobile }) {
    ${ gridCol(1, 5) };
  }
`
