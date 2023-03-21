import { bp } from 'assets/styles/brakepints'
import { color } from 'assets/styles/colors'
import { grid, gridCol, gridRow, vw } from 'assets/styles/mixins/index'
import styled from 'styled-components'


export const StyledFormWrapper = styled.div`
  ${ gridCol(5, 13) };

  form {
    width: 100%;
    ${ grid({ col: 9 }) };
    row-gap: 0;

    input, textarea {
      ${ gridCol(1, 10) };
    }

    button {
      ${ gridCol(6, 10) };
      margin-top: ${ vw(24, true) };

      @media (max-width: ${ bp.mobile }) {
        ${ gridCol(1, -1) };
      }
    }

    div:first-child {
      ${ gridRow(1, 2) }
    }

    @media (max-width: ${ bp.mobile }) {
      display: block;
      margin-top: ${ vw(35, true) };
    }
  }
`

export const StyledUnderline = styled.div`
  border-bottom: solid ${ color.white } ${ vw(1) };
  margin-bottom: ${ vw(4) };
  ${ gridCol(1, -1) };
  max-width: 0;

  @media (max-width: ${ bp.mobile }) {
    border-bottom: solid ${ color.white } ${ vw(1, true) };
    margin-bottom: ${ vw(4, true) };
  }
`
