import { CardPosition } from 'components/ExampleOfScienceCard/types'
import styled from 'styled-components'
import { bp } from 'assets/styles/brakepints'
import { color } from 'assets/styles/colors'
import { outfitMedium, vw } from 'assets/styles/mixins/index'


export const StyledCard = styled.article<{ $stickHeight?: string, $cardPosition: CardPosition, $align: string }>`
  max-width: ${ vw(120) };
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  ${ ({ $cardPosition }) => `
    top: ${ $cardPosition.top };
    ${ $cardPosition?.left ? `left: ${ $cardPosition?.left }` : '' };
    ${ $cardPosition?.right ? `right: ${ $cardPosition?.right }` : '' };
  ` };

  svg {
    height: fit-content;
  }

  @media (max-width: ${ bp.md }) {
    position: initial;
  }

  @media (min-width: ${ bp.xl }) {
    ${ ({ $stickHeight, $align }) => $stickHeight
	? `&:after {
                content: '';
                position: absolute;
                background-color: ${ color.white };
                height: ${ $stickHeight };
                width: 2px;
                top: calc(100% + 1vw);
                ${ $align === 'flex-start' ? 'left: 0' : 'right: 0' };
              `
	: '' };
  }


`

export const StyledIconWrapper = styled.div<{ $align: string }>`
  width: fit-content;
  align-self: ${ ({ $align }) => $align };

  svg {
    width: ${ vw(66.66) };
    @media (max-width: ${ bp.lg }) {
      max-width: 64px;
    }
  }
`

export const StyledText = styled.h5`
  ${ outfitMedium(18.666, color.white, 22.666) };
  margin-bottom: 0;
  margin-top: ${ vw(5.333) };

  @media (max-width: ${ bp.lg }) {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`
