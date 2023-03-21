import font from 'assets/fonts/Outfit-Bold.ttf'
import { lines } from 'assets/images/index'
import { color } from 'assets/styles/colors'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'


const ConnectSectionBgAnimation = ({ currSection }: BgAnimationProps) => {
	const cnvRef = useRef<HTMLCanvasElement>(null)
	const [ isStart, setIsStart ] = useState<boolean>(false)
	const [ lineWidth, setLineWidth ] = useState<number>(window.innerWidth * 0.0018)
	const [ radius, setRadius ] = useState<number>(window.innerWidth * 0.027)
	const velocity = window.innerWidth * 0.00035
	let animationId: number
	const circle = useMemo(() => ({
		x: radius * 2 + 15,
		y: radius * 2 + 50,
		r: radius,
		vx: velocity,
		vy: velocity,
		ang: 0
	}), [])

	const loadFonts = useCallback(async () => async () => {
		let f = new FontFace('Outfit Bold', `url(${ font })`)
		await f.load()
	}, [])

	const setRatio: SetRatio = useCallback((cnv, currSection) => {
		cnv.setAttribute('height', currSection.offsetHeight.toString())
		cnv.setAttribute('width', currSection.offsetWidth.toString())
	}, [ currSection ])

	const initImage = useCallback((): Img => {
		const bgImg = new Image()
		bgImg.src = lines
		return bgImg
	}, [])

	const iniAnimation: IniAnim = useCallback((cnv, ctx, currSection, bgImg) => {
		setRatio(cnv, currSection)
		requestAnimationFrame(animation(cnv, ctx, bgImg))
	}, [ currSection ])

	const clearRect: ClearRect = useCallback((cnv, ctx) => {
		ctx.fillStyle = color.middle_gray
		ctx.fillRect(0, 0, cnv.width, cnv.height)
	}, [])

	const animation: Anim = useCallback((cnv, ctx, bgImg) => () => {
		ctx.save()
		clearRect(cnv, ctx)
		ctx.drawImage(bgImg, 0, 0, cnv.width, cnv.height)
		ctx.restore()
		drawCircle(ctx)
		drawText(ctx, 'FILL THE FORM', circle.x, circle.y, circle.r - window.innerWidth * 0.012, Math.PI * 1.8)
		moveCircle(cnv)

		animationId = requestAnimationFrame(animation(cnv, ctx, bgImg))
	}, [])

	const drawCircle = useCallback((ctx: Ctx) => {
		ctx.save()
		ctx.beginPath()
		ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI)
		ctx.strokeStyle = color.white
		ctx.lineWidth = lineWidth
		ctx.stroke()
		ctx.closePath()
		ctx.restore()
	}, [])

	const drawText: DrawText = useCallback((ctx, str, centerX, centerY, radius, angle) => {
		ctx.save()
		ctx.lineWidth = lineWidth * 2
		ctx.font = `${ window.innerWidth * 0.0075 }pt Outfit Bold, sans-serif`
		ctx.fillStyle = 'white'
		ctx.textAlign = 'center'

		ctx.translate(centerX, centerY)
		ctx.rotate(-1 * angle / 1.5)
		ctx.rotate(-1 * (angle / str.length) / 1.5)
		ctx.rotate(Math.PI / 180 * circle.ang)

		for (let i = 0; i < str.length; i++) {
			ctx.rotate(angle / str.length)
			ctx.save()
			ctx.translate(0, -1 * radius)
			ctx.fillText(str[i], 0, 0)
			ctx.restore()
		}
		ctx.restore()

		circle.ang += velocity / 2
	}, [])

	const moveCircle = useCallback((cnv: Cnv) => {
		const touchBorderY = (
			(circle.y + circle.r + circle.vy > cnv.height) ||
			(circle.y - circle.r + circle.vy < 0)
		)
		const touchBorderX = (
			(circle.x - circle.r + circle.vx < 0)
			|| (circle.x + circle.r + circle.vx > cnv.width)
		)

		if (touchBorderX) circle.vx = -circle.vx
		if (touchBorderY) circle.vy = -circle.vy

		circle.x += circle.vx
		circle.y += circle.vy
	}, [])

	const handleResize: HandleResize = useCallback((cnv, currSection, ctx, bgImg) => () => {
		cancelAnimationFrame(animationId)
		setRatio(cnv, currSection)
		setLineWidth(() => window.innerWidth * 0.0018)
		setRadius(() => window.innerWidth * 0.027)
		circle.x = window.document.body.clientWidth * 0.027 * 2 + 15
		circle.y = window.document.body.clientWidth * 0.027 * 2 + 50
		circle.r = window.document.body.clientWidth * 0.027
		requestAnimationFrame(animation(cnv, ctx, bgImg))
	}, [])

	useEffect(() => {
		if (!isStart && currSection) {
			setIsStart(true)
			const cnv = cnvRef?.current
			const ctx = cnv?.getContext('2d')
			if (cnv && ctx && currSection) {

				loadFonts().then(() => {
					const bgImage = initImage()
					iniAnimation(cnv, ctx, currSection, bgImage)

					window.addEventListener('resize', handleResize(cnv, currSection, ctx, bgImage))
					return () => {
						window.removeEventListener('resize', handleResize(cnv, currSection, ctx, bgImage))
						cancelAnimationFrame(animationId)
					}
				})
			}
		}
	}, [ currSection, radius, lineWidth ])

	return <canvas ref={ cnvRef }/>
}

export default ConnectSectionBgAnimation
