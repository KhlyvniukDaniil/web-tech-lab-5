import { bp } from 'assets/styles/brakepints'
import { color } from 'assets/styles/colors'
import { columnGap, grid, gridCol, vw } from 'assets/styles/mixins/index'
import { Paragraph } from 'components/index'
import styled from 'styled-components'


export const StyledCardWrapper = styled.div`
  ${ grid({ col: 8 }) };
  ${ gridCol(1, -1) };
  opacity: -1;
  transform: translateY(20%);
  grid-row: span 1;

  &:nth-child(odd) > p {
    ${ gridCol(6, 9) };
  }

  &:nth-child(even) > p {
    ${ gridCol(1, 4) };
  }
`

export const StyledCard = styled(Paragraph)`
  @media (max-width: ${ bp.md }) {
    max-width: 100%;
    margin-bottom: ${ columnGap() };
  }
`

export const StyledMarkeredText = styled.span`
  color: ${ color.white };
  font-size: ${ vw(28) };
  line-height: ${ vw(34) };
  display: block;
`
