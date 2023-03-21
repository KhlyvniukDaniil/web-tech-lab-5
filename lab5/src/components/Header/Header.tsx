import { Logo, NavBar }             from 'components/index'
import { StyledHeader }             from 'components/Header/styles'
import { ForwardedRef, forwardRef } from 'react'


const Header = forwardRef((props, ref: ForwardedRef<HTMLTableHeaderCellElement>) => {
	return (
		<StyledHeader ref={ ref }>
			<Logo/>
			<NavBar/>
		</StyledHeader>
	)
})

export default Header