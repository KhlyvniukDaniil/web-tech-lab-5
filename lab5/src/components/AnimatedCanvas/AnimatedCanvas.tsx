import { useEffect, useRef }                      from 'react'
import { usePreloadedImages, useScrollAnimation } from 'utils/hooks/index'


const AnimatedCanvas = ({
	currSection,
	frameCount,
	pathToFrames,
	extension = '.jpg',
	width = 1920,
	height = 1080
}: AnimatedCanvasProps) => {
	const cnvRef = useRef<HTMLCanvasElement>(null)
	const SCROLL_FRAMES_COUNT = frameCount
	const scrollImages = usePreloadedImages(SCROLL_FRAMES_COUNT, `animationSource${ pathToFrames }`, extension)

	useScrollAnimation({
		cnv: cnvRef?.current,
		currSection: currSection,
		scrollFramesCount: SCROLL_FRAMES_COUNT,
		scrollImages,
	})

	useEffect(() => {
		const cnv = cnvRef?.current
		cnv?.setAttribute('width', (width).toString())
		cnv?.setAttribute('height', (height).toString())
	}, [])

	return <canvas ref={ cnvRef }/>
}

export default AnimatedCanvas
