import { bp } from 'assets/styles/brakepints'
import { color } from 'assets/styles/colors'
import { columnGap, grid, gridCol, gridRow, outfitBold, outfitMedium, vw } from 'assets/styles/mixins/index'
import { Heading, Paragraph } from 'components/index'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const StyledHeroContent = styled.section`
  ${ gridCol(2, 10) };
  ${ grid({ col: 2, rowGap: vw(108) }) };

  grid-template-rows: min-content;
  position: absolute;
  top: 23%;

  width: 100%;
  height: 100vh;
  align-items: flex-start;

  @media (max-width: ${ bp.mobile }) {
    ${ grid({ col: 1, rowGap: vw(26, true), row: 3 }) };
    ${ gridCol(1, -1) };
    padding: 0 ${ columnGap(true) };

    & > * {
      grid-column: span 1 !important;
      grid-row: span 1 !important;
    }
  }
`

export const StyledHeading = styled(Heading)`
  ${ gridCol(1, 2) };
  ${ gridRow(1, 2) };
  align-self: flex-end;
`

export const StyledBtn = styled(Link)`
  ${ outfitBold(20, color.white, 34, true) };
  letter-spacing: ${ vw(3, true) };
  text-decoration: none;
  position: relative;
  padding-bottom: ${ vw(15) };
  width: 100%;
  margin-bottom: ${ vw(16) };

  span {
    transition: all 0.2s linear;
    display: inline-block;
  }

  &:after {
    content: '';
    height: ${ vw(1, true) };
    background-color: ${ color.white };
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &:hover span {
    transform: translateX(${ vw(20, true) });
  }
`

export const StyledBtnDesk = styled(Link)`
  ${ outfitBold(16, color.black, 36) }
  letter-spacing: ${ vw(5) };
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  position: relative;
  border-radius: ${ vw(40) };
  padding: ${ vw(14.6) } ${ vw(41) };
  display: inline-block;
  width: fit-content;
  margin-bottom: ${ vw(16) };
  align-self: flex-end;
  background-color: ${ color.white };

  ${ gridCol(2, -1) };
  ${ gridRow(1, 2) };
`

export const StyledSubTitle = styled.p`
  ${ outfitMedium(48, color.white, 60) }
  margin: 0 0 ${ vw(50) };

  ${ gridCol(1, 2) };
  ${ gridRow(2, -1) };

  @media (max-width: ${ bp.sm }) {
    font-size: 2.8rem;
    line-height: 3.4rem;
    padding-top: 190px;
  }
`

export const StyledSubParagraph = styled(Paragraph)`
  ${ gridCol(2, -1) };
  ${ gridRow(2, -1) };

  @media (max-width: ${ bp.mobile }) {
    margin-top: ${ vw(150, true) };
  }
`
