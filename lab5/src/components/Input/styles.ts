import { bp } from 'assets/styles/brakepints'
import { color } from 'assets/styles/colors'
import { outfitMedium, vw } from 'assets/styles/mixins/index'
import styled from 'styled-components'


export const StyledInput = styled.input`
  ${ outfitMedium(28, color.white, 34) };
  display: block;
  background-color: transparent;
  outline: none;
  border: none;
  padding: ${ vw(8) };
  width: 100% !important;
  max-width: 100% !important;

  &:focus, &:hover, &:active {
    outline: none;
  }

  @media (max-width: ${ bp.mobile }) {
    ${ outfitMedium(16, color.white, 24, true) };
    letter-spacing: ${ vw(-0.5, true) };
    padding: ${ vw(8, true) };
  }
`
