import styled from 'styled-components'
import { bp } from 'assets/styles/brakepints'
import { color } from 'assets/styles/colors'
import { outfitMedium, vw } from 'assets/styles/mixins/index'


export const StyledHeading = styled.h2`
  ${ outfitMedium(120, color.white) };
  margin: 0;

  @media (max-width: ${ bp.mobile }) {
    font-size: ${ vw(64, true) };
    line-height: ${ vw(70, true) };
    letter-spacing: ${ vw(-2, true) };
  }
`
