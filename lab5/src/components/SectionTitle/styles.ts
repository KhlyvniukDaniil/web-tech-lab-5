import styled from 'styled-components'
import { bp } from 'assets/styles/brakepints'
import { color } from 'assets/styles/colors'
import { outfitMedium, vw } from 'assets/styles/mixins/index'


export const StylesSectionTitle = styled.h3`
  ${ outfitMedium(48, color.white, 60) }
  margin: 0;
  position: sticky;
  top: ${ vw(150) };
  height: fit-content;

  text-align: left;

  @media (max-width: ${ bp.md }) {
    font-size: 2.8rem;
    line-height: 3.4rem;
  }
`
