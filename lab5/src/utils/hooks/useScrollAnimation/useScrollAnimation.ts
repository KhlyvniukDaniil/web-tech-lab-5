import { useCallback, useEffect } from 'react'


const useScrollAnimation = ({
	                            cnv,
	                            currSection,
	                            scrollImages,
	                            scrollFramesCount,
	                            isStart = true,
                            }: useScrollAnimationProps) => {
	const updateImg = useCallback((index: number, cnv: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void => {
		if (!!scrollImages[index]) {
			ctx.drawImage(scrollImages[index], 0, 0, cnv.width, cnv.height)
		}
	}, [ isStart, scrollImages, currSection, scrollFramesCount ])

	const getScrollAnimation = useCallback((ctx: CanvasRenderingContext2D, cnv: HTMLCanvasElement, currSection: HTMLDivElement) => () => {
		const scrollTop = -(currSection.getBoundingClientRect().y)
		const maxScrollTop = currSection.scrollHeight - window.innerHeight - 250
		const scrollFraction = (scrollTop / maxScrollTop)
		const frameIndex = Math.max(0, Math.min(scrollFramesCount, Math.floor(scrollFraction * scrollFramesCount)))

		requestAnimationFrame(() => updateImg(frameIndex, cnv, ctx))
	}, [ scrollImages, isStart, currSection, scrollFramesCount ])

	useEffect(() => {
		if (isStart && cnv) {
			const ctx = cnv?.getContext('2d')

			if (ctx && currSection) {
				if (!!scrollImages[0]) ctx.drawImage(scrollImages[0], 0, 0, cnv.width, cnv.height)
				const animation = getScrollAnimation(ctx, cnv, currSection)

				window.addEventListener('scroll', animation)
				return () => window.removeEventListener('scroll', animation)
			}
		}
	}, [ isStart, scrollImages ])
}

export default useScrollAnimation