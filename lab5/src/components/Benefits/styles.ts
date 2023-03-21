import { personInCircle } from 'assets/images/index'
import { bp } from 'assets/styles/brakepints'
import { columnGap, grid, vw } from 'assets/styles/mixins/index'
import styled from 'styled-components'


export const StyledSection = styled.section`
  ${ grid({}) };
  background-image: url(${ personInCircle });
  background-size: contain;
  background-position: center top;
  background-repeat: no-repeat;
  align-items: flex-end;

  grid-gap: ${ vw(30) };
  position: relative;
  padding: 0 ${ columnGap() };
  margin-top: 13%;
  min-height: ${ vw(1000) };
  margin-bottom: ${ vw(295) };


  & > section {
    position: initial;
    margin: 0;
  }

  @media (max-width: ${ bp.xl }) {
    margin-top: 25%;
  }
`

