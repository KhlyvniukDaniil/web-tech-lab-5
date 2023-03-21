import { FormikProps }    from 'formik'
import { HTMLAttributes } from 'react'


interface InputProps extends HTMLAttributes<HTMLInputElement>{
	form: FormikProps
	name: string
	id: string
	placeholder: string
}