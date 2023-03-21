import { ForwardedRef, forwardRef } from 'react'
import { StyledTextarea, }          from 'components/Textarea/styles'
import { TextareaProps }            from 'components/Textarea/types'


const Textarea = forwardRef(({
	form,
	name,
	id,
	placeholder,
	...props
}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
	return (
		<>
			<StyledTextarea
				ref={ ref }
				id={ id }
				onChange={ form.handleChange }
				onBlur={ form.handleBlur }
				value={ form.values[name] }
				{ ...props }
			/>
			{ form.touched[name] && form.errors[name] && (
				<div style={ { color: 'crimson', fontSize: '1rem', gridColumn: 'span 5' } }>{ form.errors[name] }</div>
			) }
		</>
	)
})

export default Textarea