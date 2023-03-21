import { StylesSectionTitle } from 'components/SectionTitle/styles'
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react'


const SectionTitle = forwardRef((props: HTMLAttributes<HTMLHeadingElement>, ref: ForwardedRef<HTMLHeadingElement>) =>
	<StylesSectionTitle { ...props } />)

export default SectionTitle