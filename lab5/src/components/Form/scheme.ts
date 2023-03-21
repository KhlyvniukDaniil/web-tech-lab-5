import * as yup from 'yup'


const isRequiredError = 'This field is required'
const STR_REGEX = /^[a-zа-яё" ]+$/i

export const SCHEMA = yup.object().shape({
	name: yup.string()
	         .strict(true)
	         .min(3, 'Must be longer than 3 characters')
	         .max(20, 'The name is to long')
	         .required(isRequiredError)
	         .matches(STR_REGEX, 'Invalid symbols, use only letters'),
	linkToProfile: yup.string()
	                  .strict(true)
	                  .min(5, 'Must be longer than 5 characters')
	                  .required(isRequiredError),
	email: yup.string()
	          .strict(true)
	          .required(isRequiredError)
	          .email('Enter correct email'),
	phone: yup.string()
	          .required(isRequiredError),
	country: yup.string()
	            .required(isRequiredError),
	fieldOfResearch: yup.string()
	                    .required(isRequiredError),
	projectDescription: yup.string()
	                       .max(500, 'Maximum 500 symbols')
	                       .required(isRequiredError),
	confirmCheckbox: yup.bool().oneOf([ true ], isRequiredError),
	confirmCheckbox2: yup.bool().oneOf([ true ], isRequiredError)
})
