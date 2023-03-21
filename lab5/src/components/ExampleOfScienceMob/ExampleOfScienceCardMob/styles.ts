import styled from 'styled-components'
import { color } from 'assets/styles/colors'
import { outfitMedium, vw } from 'assets/styles/mixins/index'


export const StyledCard = styled.article<{ $align: string; }>`
  max-width: ${ vw(145, true) };
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: ${ ({ $align }) => $align };
  position: relative;
`

export const StyledIconWrapper = styled.div<{ $align: string }>`
  width: fit-content;
  align-self: ${ ({ $align }) => $align };

  svg {
    max-width: ${ vw(78, true) };
  }
`

export const StyledText = styled.h5`
  margin-bottom: 0;
  margin-top: ${ vw(15, true) };
  ${ outfitMedium(16, color.white, 24, true) };
`
