import { checkboxArrow } from 'assets/images/index'
import { color } from 'assets/styles/colors'
import { gridCol, outfitMedium, vw } from 'assets/styles/mixins/index'
import styled from 'styled-components'
import { bp } from 'assets/styles/brakepints'


export const StyledInput = styled.input`
  width: 0;
  height: 0;
  z-index: -5;
  display: none;

  &:checked + label::before {
    border: ${ vw(1) } solid ${ color.black };
    background-color: ${ color.black };
    background-image: url(${ checkboxArrow });

    @media (max-width: ${ bp.mobile }) {
      border: ${ vw(1, true) } solid ${ color.black };
    }
  }
`

export const StyledLabel = styled.label`
  ${ outfitMedium(16, color.white, 24) };
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  position: relative;
  letter-spacing: ${ vw(-0.5) };
  padding-left: ${ vw(34) };
  ${ gridCol(1, -1) };
  margin: ${ vw(14) } 0 ${ vw(28) };

  &:before {
    position: absolute;
    top: ${ vw(1) };
    left: 0;
    content: '';
    display: inline-block;
    width: ${ vw(20) };
    height: ${ vw(20) };
    flex-shrink: 0;
    flex-grow: 0;
    border: ${ vw(1) } solid ${ color.white };
    border-radius: ${ vw(2.5) };
    margin-right: ${ vw(5) };
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;

    @media (max-width: ${ bp.mobile }) {
      top: ${ vw(1, true) };
      width: ${ vw(15, true) };
      height: ${ vw(15, true) };
      border: ${ vw(1, true) } solid ${ color.white };
      border-radius: ${ vw(1.5, true) };
      margin-right: ${ vw(2.5, true) };
    }
  }

  @media (max-width: ${ bp.mobile }) {
    ${ outfitMedium(12, color.white, 15, true) };
    letter-spacing: ${ vw(-0.5, true) };
    padding-left: ${ vw(24, true) };
    margin: ${ vw(14, true) } 0 ${ vw(28, true) };
  }
`
