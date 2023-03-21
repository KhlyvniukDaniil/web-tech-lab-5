import { ForwardedRef, forwardRef } from 'react'
import { StyledParagraph }          from 'components/Paragraph/styles'
import { ParagraphProps }           from 'components/Paragraph/types'


const Paragraph = forwardRef(({
	supline = false,
	children,
	...props
}: ParagraphProps, ref: ForwardedRef<HTMLParagraphElement>) => (
	<StyledParagraph ref={ ref } $supline={ supline } { ...props } >{ children }</StyledParagraph>
))

export default Paragraph