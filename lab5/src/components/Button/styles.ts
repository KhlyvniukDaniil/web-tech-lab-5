import { color } from 'assets/styles/colors'
import { outfitMedium, vw } from 'assets/styles/mixins/index'
import styled from 'styled-components'
import { bp } from 'assets/styles/brakepints'


export const StyledButton = styled.button`
  ${ outfitMedium(16, color.black, 30) };
  text-transform: uppercase;
  background-color: ${ color.white };
  letter-spacing: ${ vw(2) };
  cursor: pointer;
  width: 100% !important;
  max-width: 100% !important;

  padding: ${ vw(15) };
  border-radius: ${ vw(30) };
  border: none;
  outline: none;

  @media (max-width: ${ bp.mobile }) {
    ${ outfitMedium(16, color.black, 30, true) };
    padding: ${ vw(15, true) };
    border-radius: ${ vw(30, true) };
    letter-spacing: ${ vw(2, true) };
  }
`
