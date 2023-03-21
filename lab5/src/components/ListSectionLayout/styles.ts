import { bp } from 'assets/styles/brakepints'
import { color } from 'assets/styles/colors'
import { columnGap, grid, gridCol, interMedium, vw } from 'assets/styles/mixins/index'
import styled from 'styled-components'


export const StyledTitleWrapper = styled.section`
  ${ gridCol(3, 11) };
  position: absolute;
  top: 0;
  margin-bottom: max(50vh, 500px);


  & > h3 {
    margin-bottom: ${ vw(30) };
    position: initial;
  }

  @media (max-width: ${ bp.mobile }) {
    display: block;
    width: 100%;
    padding: 0 ${ columnGap(true) };
  }
`
export const StyledCardList = styled.div`
  ${ gridCol(1, 5) };
  ${ grid({ col: 4 }) };

  border-top: solid ${ vw(1) } ${ color.white };
  height: fit-content;

  @media (max-width: ${ bp.md }) {
    ${ grid({ col: 1 }) };
    grid-gap: 0;
    padding-top: ${ columnGap() };
  }
`

export const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: -1;

  p {
    color: ${ color.white };
    margin: 0;
  }
`

export const StyledMarker = styled.span`
  ${ interMedium(48, color.white) };
  width: fit-content;
  height: fit-content;
  margin: ${ vw(40) } 0;

  @media (max-width: ${ bp.mobile }) {
    ${ interMedium(28, color.white, 34, true) };
  }
`
