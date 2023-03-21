import { StyledHero }                                      from 'components/Hero/styles'
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react'


const Hero = forwardRef((props: HTMLAttributes<HTMLDivElement>, ref: ForwardedRef<HTMLDivElement>) =>
	<StyledHero ref={ ref } { ...props }/>
)

export default Hero