import { Header }                    from 'components/index'
import { HTMLAttributes, useEffect } from 'react'


const PageLayout = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
	useEffect(() => {
		window.scroll(0, 0)
	}, [])

	return (
		<main { ...props }>
			<Header/>
			{ children }
		</main>
	)
}

export default PageLayout