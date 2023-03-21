import { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { StyledButton } from 'components/Button/styles'


const Button = forwardRef((props: HTMLAttributes<HTMLButtonElement>, ref: ForwardedRef<HTMLButtonElement>) => (
		<StyledButton ref={ ref } type={ 'submit' } { ...props } />
	)
)

export default Button