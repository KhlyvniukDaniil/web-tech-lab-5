import { bp } from 'assets/styles/brakepints'
import { color } from 'assets/styles/colors'
import { columnGap, grid, gridCol, gridRow, vw } from 'assets/styles/mixins/index'
import { Paragraph, SectionTitle } from 'components/index'
import styled from 'styled-components'


export const StyledSection = styled.section`
  ${ grid({ rowGap: vw(96) }) };
  background-color: ${ color.middle_gray };
  padding: ${ vw(20) } ${ columnGap() };
  position: relative;
  grid-template-rows: minmax(${ vw(200) }, 0);

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: ${ columnGap() };
    left: ${ columnGap() };
    height: ${ vw(3) };
    background-color: ${ color.white };

    @media (max-width: ${ bp.mobile }) {
      height: ${ vw(3, true) };
    }
  }

  @media (max-width: ${ bp.mobile }) {
    display: block;
    padding: ${ vw(30, true) } ${ columnGap(true) } ${ vw(266, true) };
  }
`

export const StyledTitle = styled(SectionTitle)`
  ${ gridCol(1, 4) };
  ${ gridRow(1, 3) };
  font-size: ${ vw(64) };
  line-height: ${ vw(70) };
  position: initial;

  @media (max-width: ${ bp.mobile }) {
    margin-bottom: ${ vw(35, true) };
    font-size: ${ vw(36, true) };
    line-height: ${ vw(40, true) };
    letter-spacing: ${ vw(-1.6, true) };
  }
`

export const StyledParagraph = styled(Paragraph)`
  color: ${ color.white } !important;
  ${ gridCol(5, 10) };
  margin: 0;
  height: fit-content;

  span {
    display: inline-block;
    margin-bottom: ${ vw(50) };

    @media (max-width: ${ bp.mobile }) {
      margin-bottom: ${ vw(24, true) };
    }
  }

  @media (max-width: ${ bp.mobile }) {
    margin-top: ${ vw(32, true) };
  }
`

export const StyledInfoBtnWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: ${ columnGap() };
  right: ${ columnGap() };
  cursor: pointer;

  svg {
    width: ${ vw(40) };
    height: ${ vw(40) };
  }
`

export const StyledCanvasWrapper = styled.div`
  ${ gridRow(1, 3) };
  ${ gridCol(1, 4) };
  display: flex;
  width: 100%;

  canvas {
    max-width: 100%;
    display: block;
    align-self: center;
  }
`

