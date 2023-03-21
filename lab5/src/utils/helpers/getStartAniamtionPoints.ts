import { vw } from 'assets/styles/mixins/index'
import { useMedia } from 'utils/hooks/index'


const getStartAnimationPoint = (
	columnCount: number,
	stepInPx: number,
): () => string => {
	const { isDesktop } = useMedia()
	let isFirstIteration = true
	let i = 0

	return () => {
		const isNextRow: boolean = (i - (stepInPx * columnCount) === -stepInPx) || isFirstIteration

		if (isDesktop) {
			if (isNextRow) {
				i = 0
			} else {
				i += stepInPx
			}
		}

		isFirstIteration = false
		return vw(i)
	}
}

export default getStartAnimationPoint
