import styled from 'styled-components'
import { outfitBold, vw } from 'assets/styles/mixins/index'


export const StyledBoldText = styled.span`
  ${ outfitBold(20, 'inherit', 34) }
  letter-spacing: ${ vw(3) };
  text-transform: uppercase;
`
