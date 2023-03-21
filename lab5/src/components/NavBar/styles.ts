import { color } from 'assets/styles/colors'
import { gridCol, interExtraBold, vw } from 'assets/styles/mixins/index'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


export const StyledNavBar = styled.nav`
  ${ gridCol(4, 13) };
  display: flex;
  align-items: center;
  margin-left: auto;
`

export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: ${ vw(48) };
  list-style: none;
  margin: 0;
  padding: 0;

  li:last-child > a {
    color: ${ color.black };
    background-color: ${ color.white };
    padding: ${ vw(20) } ${ vw(28) };
    border-radius: ${ vw(40) };
    letter-spacing: ${ vw(5) };
  }
`

export const StyledLink = styled(NavLink)`
  ${ interExtraBold(16, color.white, 34) };
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: ${ vw(0.5) };
`
