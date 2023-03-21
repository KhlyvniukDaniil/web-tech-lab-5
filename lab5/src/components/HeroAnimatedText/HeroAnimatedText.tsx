import { useMemo } from 'react'
import { Tween } from 'react-gsap'
import { TweenProps } from 'react-gsap/dist/Tween'
import { vw } from 'assets/styles/mixins/index'


const HeroFAnimatedText = (props: TweenProps) => {
	const fadeOut = useMemo(() => ({
		transition: 'all ease-in 0.3s',
		opacity: 0,
		translateY: vw(-20)
	}), [])
	const fadeIn = useMemo(() => ({
		transition: 'all ease-in 0.3s',
		opacity: 1,
		translateY: 0
	}), [])

	return <Tween to={ fadeOut } from={ fadeIn } { ...props }/>
}

export default HeroFAnimatedText
