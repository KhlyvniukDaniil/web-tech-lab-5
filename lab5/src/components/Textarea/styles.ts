import { bp } from 'assets/styles/brakepints'
import { color } from 'assets/styles/colors'
import { outfitMedium, vw } from 'assets/styles/mixins/index'
import styled from 'styled-components'


export const StyledTextarea = styled.textarea`
  ${ outfitMedium(28, color.white, 34) };
  padding: ${ vw(8) };
  display: block;
  background-color: transparent;
  min-height: ${ vw(315) };
  outline: none;
  border: none;
  margin-bottom: ${ vw(4) };
  resize: none;
  width: 100% !important;
  max-width: 100% !important;

  &:focus, &:hover, &:active {
    outline: none;
  }

  @media (max-width: ${ bp.mobile }) {
    ${ outfitMedium(16, color.white, 24, true) };
    letter-spacing: ${ vw(-0.5, true) };
    padding: ${ vw(8, true) };
    min-height: ${ vw(140, true) };
  }
`
