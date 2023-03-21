import { LogoDottedSphereIcon, LogoSphereIcon, LogoText } from 'assets/images/index'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { bp } from 'assets/styles/brakepints'
import { gridCol, vw } from 'assets/styles/mixins/index'


export const StyledHeading = styled.h1`
  ${ gridCol(1, 3) };
  margin: 0;
`

export const StyledLogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  width: fit-content;
`

export const StyledLogoIcon = styled.div`
  position: relative;
  width: fit-content;
`

export const StyledLogoSphere = styled(LogoSphereIcon)`
  margin: ${ vw(-3) };
  width: ${ vw(110) };
  height: ${ vw(110) };


  @media (max-width: ${ bp.mobile }) {
    width: ${ vw(58, true) };
    height: ${ vw(58, true) };
  }
`

export const StyledLogoDottedSphere = styled(LogoDottedSphereIcon)`
  width: ${ vw(100) };
  height: ${ vw(100) };
  position: absolute;
  right: ${ vw(-50) };
  z-index: -1;

  @media (max-width: ${ bp.mobile }) {
    width: ${ vw(53, true) };
    height: ${ vw(53, true) };
    right: ${ vw(-20, true) };
  }
`

export const StyledLogoText = styled(LogoText)`
  margin-left: ${ vw(80) };
  width: ${ vw(70) };
  height: ${ vw(50) };

  @media (max-width: ${ bp.md }) {
    margin-left: ${ vw(30, true) };
    width: ${ vw(43, true) };
    height: ${ vw(31, true) };
  }
`
