import { FormikProps }    from 'formik'
import { HTMLAttributes } from 'react'


interface TextareaProps extends  HTMLAttributes<HTMLTextAreaElement>{
	form: FormikProps
	name: string
	id: string,
	placeholder: string
}