import { mountains, mountainsFrontSide } from 'assets/images/index'
import { bp } from 'assets/styles/brakepints'
import { color } from 'assets/styles/colors'
import { columnGap, outfitBold, outfitMedium, vw } from 'assets/styles/mixins/index'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const StyledSection = styled.section`
  background-image: url(${ mountains });
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
  height: ${ vw(1559) };
  position: relative;

  @media (max-width: ${ bp.mobile }) {
    padding: 0 ${ columnGap(true) };
    min-height: ${ vw(1034, true) };
    height: initial;
  }
`

export const StyledGrantWrapper = styled.div`
  text-align: center;
  position: absolute;
  bottom: ${ vw(10) };
  top: ${ vw(800) };
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${ bp.mobile }) {
    width: 100%;
    top: ${ vw(550, true) };
  }
`

export const StyledTitle = styled.h5`
  ${ outfitMedium(35, color.gray, 40) };
  margin-top: 0;
  margin-bottom: ${ vw(30) };
`

export const StyledPrice = styled.h4`
  ${ outfitMedium(100, color.strong_gray, 120) };
  margin: 0;

  @media (max-width: ${ bp.mobile }) {
    font-size: ${ vw(60, true) };
    line-height: ${ vw(85, true) };
  }
`

export const StyledButton = styled(Link)`
  pointer-events: initial !important;
  ${ outfitBold(16, color.gray, 30) };

  padding: ${ vw(15) } 0;
  border-radius: ${ vw(30) };
  display: inline-block;
  text-align: center;
  letter-spacing: 0.1vw;
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${ color.white };
  z-index: 3;
  position: absolute;
  bottom: 15%;
  left: ${ columnGap() };
  right: ${ columnGap() };

  @media (max-width: ${ bp.mobile }) {
    ${ outfitBold(16, color.gray, 30, true) };
    letter-spacing: ${ vw(2, true) };
    padding: ${ vw(15, true) };
    border-radius: ${ vw(30, true) };
    left: ${ columnGap(true) };
    right: ${ columnGap(true) };
  }
`

export const StyledLink = styled(Link)`
  ${ outfitBold(33.1, color.gray, 45) };
  display: inline-block;

  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
`

export const StyledTextWrapper = styled.article`
  overflow: hidden;
  position: relative;
  background-color: ${ color.soft_white };
  padding: ${ vw(40) };
  min-height: 100%;
  max-width: 35vw;

  @media (max-width: ${ bp.mobile }) {
    padding: ${ vw(40, true) } 0;
    width: ${ vw(320, true) };
    max-width: 100%;
    margin: 0 auto;
  }
`

export const StyledShadow = styled.div`
  background-image: linear-gradient(110deg, transparent 0%, ${ color.soft_white } 30%);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: -100%;
  pointer-events: none;
  z-index: 2;
`

export const StyledImageWrapper = styled.div`
  background-image: linear-gradient(0deg, ${ color.black } 0.01%, rgba(0, 0, 0, 0) 10%), url(${ mountainsFrontSide });
  background-size: cover;
  padding: 0 ${ columnGap() };
  background-position: center bottom;
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`
