import styled from 'styled-components'
import { bp } from 'assets/styles/brakepints'
import { color } from 'assets/styles/colors'
import { outfitMedium, vw } from 'assets/styles/mixins/index'


export const StyledParagraph = styled.p<{ $supline: boolean }>`
  ${ outfitMedium(28, color.lightgray, 34) };
  letter-spacing: ${ vw(3) };
  margin-top: 0;

  ${ ({ $supline }) => {
    if ($supline) {
      return `
				position: relative;
				padding-top: 15px;
				
				&:before {
          content: "";
          height: 1px;
          background-color: ${ color.lightgray };
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
				}
			`
    }
  } };

  @media (max-width: ${ bp.mobile }) {
    font-size: ${ vw(16, true) };
    line-height: ${ vw(24, true) };
    letter-spacing: ${ vw(-0.5, true) };
  }
`
