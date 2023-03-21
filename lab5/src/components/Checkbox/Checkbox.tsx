import { StyledInput, StyledLabel } from 'components/Checkbox/styles'
import { CheckboxProps }            from 'components/Checkbox/types'


const Checkbox = ({
	children,
	form,
	name,
	id,
	...props
}: CheckboxProps) => {

	return (
		<>
			<StyledInput
				onChange={ form.handleChange }
				onBlur={ form.handleBlur }
				value={ form.values[name] }
				type={ 'checkbox' }
				id={ id }
				name={ name }
				{ ...props }
			/>
			<StyledLabel htmlFor={ id }>
				{ children }
			</StyledLabel>
			{ form.touched[name] && form.errors[name] && (
				<div style={ { color: 'crimson', fontSize: '1rem', gridColumn: 'span 5' } }>{ form.errors[name] }</div>
			) }
		</>
	)
}

export default Checkbox