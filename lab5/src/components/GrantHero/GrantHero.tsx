import { StyledCanvasWrapper } from 'components/GrantHero/styles'
import { Hero, HeroContent } from 'components/index'
import { lazy, Suspense, useRef } from 'react'
import { useMedia } from 'utils/hooks/index'


const HeroBgAnimation = lazy(() => import('components/GrantHero/bgAnimation/HeroBgAnimation'))

const GrantHero = () => {
	const currSectionRef = useRef<HTMLDivElement>(null)
	const heroContentRef = useRef<HTMLDivElement>(null)
	const { isMobile } = useMedia()

	return (
		<Hero ref={ currSectionRef }>
			<StyledCanvasWrapper>
				<Suspense>
					<HeroBgAnimation currSection={ currSectionRef }/>
				</Suspense>
				<HeroContent
					ref={ heroContentRef }
					title={ 'Lorem ipsum' }
					subTitle={
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur est facere pariatur quia, sequi '
					}
					text={ isMobile
						? (
							<>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto cupiditate dolore
								doloremque eaque eos incidunt libero quis ratione vitae. Accusamus aut consectetur debitis dolorum eos
								in incidunt iste necessitatibus saepe, sapiente similique sint sunt.
								<br/>
								<br/>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto cupiditate dolore
								doloremque eaque eos incidunt libero quis ratione vitae. Accusamus aut consectetur debitis dolorum eos
								in incidunt iste necessitatibus saepe, sapiente similique sint sunt.
							</>
						) : (
							<>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto cupiditate dolore
								doloremque eaque eos incidunt libero quis ratione vitae. Accusamus aut consectetur debitis dolorum eos
								in incidunt iste necessitatibus saepe, sapiente similique sint sunt.
								<br/>
								<br/>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto cupiditate dolore
								doloremque eaque eos incidunt libero quis ratione vitae. Accusamus aut consectetur debitis dolorum eos
								in incidunt iste necessitatibus saepe, sapiente similique sint sunt.
							</>
						) }
				/>
			</StyledCanvasWrapper>
		</Hero>
	)
}

export default GrantHero
