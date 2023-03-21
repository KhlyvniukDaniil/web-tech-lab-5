import { StyledSection }     from 'components/Benefits/styles'
import { ListSectionLayout } from 'components/index'
import { ScrollTrigger }     from 'react-gsap'



const Benefits = () => {
	return (
		<StyledSection>
			<ScrollTrigger start={ `top center` } end={ `bottom bottom` }>
				<ListSectionLayout
					title={ 'Benefits of the program' }
					textContent={ [
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel.',
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel.',
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel.',
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel.'
					] }
				/>
			</ScrollTrigger>
		</StyledSection>
	)
}

export default Benefits
