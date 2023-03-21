import {
	ApplicationProcess,
	Benefits,
	ConnectSection,
	ExampleOfScience,
	ExampleOfScienceMob,
	GrantHero,
	GrantSection,
	Offer,
	OurSupport,
	PageLayout
} from 'components/index'
import { useRef } from 'react'
import { useMedia } from 'utils/hooks/index'


const Main = () => {
	const { isDesktop, isMobile } = useMedia()
	const scrollToRef = useRef<HTMLHeadingElement>(null)

	const handleScrollTo = () => {
		scrollToRef?.current?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<PageLayout>
			<GrantHero/>
			{ isDesktop ? <Benefits/> : <GrantSection/> }
			{ isDesktop && <Offer/> }
			<OurSupport/>
			{ isMobile && <ExampleOfScienceMob/> }
			{ isDesktop && <ExampleOfScience/> }
			{ isDesktop && <ApplicationProcess/> }
			<ConnectSection scrollTo={ handleScrollTo }/>
		</PageLayout>
	)
}

export default Main
