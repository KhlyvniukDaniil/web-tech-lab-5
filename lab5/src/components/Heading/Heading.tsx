import { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { StyledHeading }                            from 'components/Heading/styles'


const Heading = forwardRef((props: HTMLAttributes<HTMLHeadingElement>, ref: ForwardedRef<HTMLHeadingElement>) =>
	<StyledHeading ref={ ref } { ...props }/>)

export default Heading