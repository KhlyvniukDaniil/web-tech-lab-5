import { noiseBg }           from 'assets/images/index'
import styled, { keyframes } from 'styled-components'


const noiseAnimation = keyframes`
  0% {
    transform: translate3d(1%, -1%, 0);
  }
  10% {
    transform: translate3d(-5%, -2%, 0);
  }
  20% {
    transform: translate3d(10%, 5%, 0);
  }
  30% {
    transform: translate3d(5%, -11%, 0);
  }
  40% {
    transform: translate3d(-12%, -5%, 0);
  }
  50% {
    transform: translate3d(10%, 9%, 0);
  }
  60% {
    transform: translate3d(15%, 0, 0);
  }
  70% {
    transform: translate3d(-10%, 8%, 0);
  }
  80% {
    transform: translate3d(10%, 2%, 0);
  }
  90% {
    transform: translate3d(1%, 5%, 0);
  }
  100% {
    transform: translate3d(0, 8%, 0);
  }
`

export const StyledNoiseBg = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  pointer-events: none !important;
  background: url(${ noiseBg }) repeat;
  animation: ${ noiseAnimation } 1.2s steps(3) infinite both;
  height: 200%;
  left: -50%;
  top: -50%;
  width: 200%;
  will-change: auto;
  z-index: 99999;
`


