import { InputProps }               from 'components/Input/types'
import { ForwardedRef, forwardRef } from 'react'
import { StyledInput }              from 'components/Input/styles'


const Input = forwardRef(({ form, name, placeholder, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
	return (
		<>
			<StyledInput
				ref={ ref }
				placeholder={ placeholder }
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

export default Input