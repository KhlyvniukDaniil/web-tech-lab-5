import styled from 'styled-components'
import { bp } from 'assets/styles/brakepints'
import { color } from 'assets/styles/colors'
import { grid } from 'assets/styles/mixins/index'


export const StyledHero = styled.section`
  ${ grid({}) };
  background-color: ${ color.black };
  position: relative;
  min-height: 150vh;

  @media (max-width: ${ bp.mobile }) {
    ${ grid({ col: 4 }) };
  }
`
