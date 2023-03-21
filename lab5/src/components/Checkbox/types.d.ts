import { FormikProps }               from 'formik'
import { HTMLAttributes, ReactNode } from 'react'


interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
	children: ReactNode,
	form: FormikProps,
	id: string,
	name: string
}