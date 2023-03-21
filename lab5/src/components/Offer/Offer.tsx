import { OfferCard } from 'components/index'
import {
	StyledCanvasWrapper,
	StyledOfferCardList,
	StyledOfferWrapper,
	StyledSectionTitle
} from 'components/Offer/styles'
import { lazy, Suspense, useRef } from 'react'
import { useMedia } from 'utils/hooks/index'


const OfferBgAnimation = lazy(() => import('components/AnimatedCanvas/index'))

const Offer = () => {
	const currSectionRef = useRef<HTMLDivElement>(null)
	const { isDesktop } = useMedia()

	return (
		<StyledOfferWrapper ref={ currSectionRef }>
			<StyledSectionTitle>What we offer</StyledSectionTitle>
			<StyledCanvasWrapper>
				{ isDesktop && (<Suspense>
						<OfferBgAnimation
							currSection={ currSectionRef.current }
							height={ 1920 }
							width={ 1080 }
							pathToFrames={ '/offer' }
							frameCount={ 121 }
						/>
					</Suspense>
				) }
				<StyledOfferCardList>

					<OfferCard
						title={ 'Lorem ipsum dolor.' }
						text={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum fuga impedit omnis placeat similique voluptatibus? ' +
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, rem?'
						}
					/>
					<OfferCard
						title={ 'Lorem ipsum dolor.' }
						text={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum fuga impedit omnis placeat similique voluptatibus? ' +
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, rem?'
						}
					/>
					<OfferCard
						title={ 'Lorem ipsum dolor.' }
						text={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum fuga impedit omnis placeat similique voluptatibus? ' +
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, rem?'
						}
					/>
					<OfferCard
						title={ 'Lorem ipsum dolor.' }
						text={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum fuga impedit omnis placeat similique voluptatibus? ' +
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, rem?'
						}
					/>
					<OfferCard
						title={ 'Lorem ipsum dolor.' }
						text={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum fuga impedit omnis placeat similique voluptatibus? ' +
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, rem?'
						}
					/>
				</StyledOfferCardList>
			</StyledCanvasWrapper>
		</StyledOfferWrapper>
	)
}

export default Offer
