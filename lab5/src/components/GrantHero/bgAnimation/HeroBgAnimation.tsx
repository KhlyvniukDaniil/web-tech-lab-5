import { RefObject, useCallback, useEffect, useRef, useState } from 'react'
import { usePreloadedImages, useScrollAnimation } from 'utils/hooks/index'


const HeroBgAnimation = ({ currSection }: { currSection: RefObject<HTMLDivElement> }) => {
	const ONLOAD_FRAMES_COUNT = 20
	const SCROLL_FRAMES_COUNT = 130
	const onloadImages = usePreloadedImages(ONLOAD_FRAMES_COUNT, 'animationSource/hero/heroOnload')
	const scrollImages = usePreloadedImages(SCROLL_FRAMES_COUNT, 'animationSource/hero/heroBg')
	const [ isOnloadAnimationFinished, setIsOnloadAnimationFinished ] = useState<boolean>(false)
	const cnvRef = useRef<HTMLCanvasElement>(null)
	const height = 1080
	const width = 1920

	const onloadAnimation = useCallback((ctx: CanvasRenderingContext2D, cnv: HTMLCanvasElement, index: number) => {
		return () => {
			if (index === ONLOAD_FRAMES_COUNT) return setIsOnloadAnimationFinished(() => true)

			if (!!onloadImages[index]) {
				ctx.drawImage(onloadImages[index], 0, 0, cnv.width, cnv.height)
			}
			setTimeout(() => requestAnimationFrame(onloadAnimation(ctx, cnv, Math.min(ONLOAD_FRAMES_COUNT, index += 1))), 16)
		}
	}, [ onloadImages ])

	const initOnLoadingAnimation = useCallback((ctx: CanvasRenderingContext2D, cnv: HTMLCanvasElement) => () => {
		ctx.drawImage(onloadImages[0], 0, 0, cnv.width, cnv.height)
		requestAnimationFrame(onloadAnimation(ctx, cnv, 0))
	}, [ onloadImages ])

	useScrollAnimation({
		cnv: cnvRef.current,
		currSection: currSection.current,
		scrollFramesCount: SCROLL_FRAMES_COUNT,
		scrollImages,
		isStart: isOnloadAnimationFinished
	})

	useEffect(() => {
		if (onloadImages.length && !isOnloadAnimationFinished) {
			const cnv = cnvRef?.current
			const ctx = cnv?.getContext('2d')

			if (ctx && cnv && currSection?.current && !!onloadImages[0]) {
				cnv?.setAttribute('width', (width).toString())
				cnv?.setAttribute('height', (height).toString())

				ctx.drawImage(onloadImages[0], 0, 0)
				requestAnimationFrame(initOnLoadingAnimation(ctx, cnv))
			}
		}
	}, [ onloadImages, isOnloadAnimationFinished ])

	return <canvas ref={ cnvRef }/>
}

export default HeroBgAnimation
