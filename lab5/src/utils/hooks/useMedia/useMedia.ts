import { bp } from 'assets/styles/brakepints'
import { useCallback, useLayoutEffect, useState } from 'react'


const useMedia = (): Media => {
	const MOBILE_BP = parseInt(bp.mobile)
	const [ isMobile, setIsMobile ] = useState<boolean | null>(null)

	const handleResize = useCallback(() => {
		setIsMobile(() => window.innerWidth <= MOBILE_BP)
	}, [ window.innerWidth ])

	useLayoutEffect(() => {
		handleResize()

		window.addEventListener('resize', handleResize)
		window.addEventListener('onload', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [ isMobile ])

	return {
		isDesktop: !isMobile,
		isMobile: !!isMobile,
	}
}
export default useMedia