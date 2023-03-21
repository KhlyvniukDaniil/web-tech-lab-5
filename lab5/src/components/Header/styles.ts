import styled from 'styled-components'
import { columnGap, grid, vw } from 'assets/styles/mixins/index'
import { bp } from 'assets/styles/brakepints'


export const StyledHeader = styled.header`
  ${ grid({}) };

  padding: ${ vw(10) } ${ columnGap() };
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0);

  @media (max-width: ${ bp.mobile }) {
    display: block;
    padding: ${ vw(10, true) } ${ columnGap(true) };
  }
`
