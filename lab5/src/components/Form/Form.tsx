import { Button, Checkbox, Input, Textarea } from 'components/index'
import { SCHEMA } from 'components/Form/scheme'
import { FormikValues, useFormik } from 'formik'
import { useRef } from 'react'
import { ScrollTrigger, Tween } from 'react-gsap'
import { StyledFormWrapper, StyledUnderline } from 'components/Form/styles'


const Form = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			linkToProfile: '',
			email: '',
			phone: '',
			country: '',
			fieldOfResearch: '',
			projectDescription: '',
			confirmCheckbox: false,
			confirmCheckbox2: false
		},
		onSubmit: (values: FormikValues) => {
			console.log(values)
		},
		validationSchema: SCHEMA
	})

	const fadeIn = useRef({
		maxWidth: '100%'
	})

	return (
		<StyledFormWrapper>
			<ScrollTrigger start={ '-150px center' }>
				<form noValidate onSubmit={ formik.handleSubmit }>
					<Tween to={ { ...fadeIn.current } } stagger={ 0.2 }>
						<Input
							id={ 'name' }
							name={ 'name' }
							placeholder={ 'Name' }
							form={ formik }
						/>
						<StyledUnderline/>
						<Input
							id={ 'linkToProfile' }
							name={ 'linkToProfile' }
							placeholder={ 'Link to your professional profile' }
							form={ formik }
						/>
						<StyledUnderline/>
						<Input
							id={ 'email' }
							name={ 'email' }
							placeholder={ 'Email address' }
							form={ formik }
						/>
						<StyledUnderline/>
						<Input
							id={ 'phone' }
							name={ 'phone' }
							placeholder={ 'Phone number' }
							form={ formik }
						/>
						<StyledUnderline/>
						<Input
							id={ 'country' }
							name={ 'country' }
							placeholder={ 'Country' }
							form={ formik }
						/>
						<StyledUnderline/>
						<Input
							id={ 'fieldOfResearch' }
							name={ 'fieldOfResearch' }
							placeholder={ 'Field of research' }
							form={ formik }
						/>
						<StyledUnderline/>
						<Textarea
							id={ 'projectDescription' }
							name={ 'projectDescription' }
							placeholder={ 'Short description of your project' }
							form={ formik }
						/>
						<StyledUnderline/>
					</Tween>
					<Checkbox id={ 'confirm' } name={ 'confirmCheckbox' } form={ formik }>
						I hereby expressly acknowledge that I have read and understand all grant program Terms And Conditions.
					</Checkbox>
					<Button>send</Button>
				</form>
			</ScrollTrigger>
		</StyledFormWrapper>
	)
}

export default Form
