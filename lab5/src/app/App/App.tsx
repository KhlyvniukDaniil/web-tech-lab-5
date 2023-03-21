import { ROUTES } from 'app/App/routes'
import GlobalStyle from 'assets/styles/global'
import { NoiseBg } from 'components/index'
import { Main } from 'pages/index'
import React from 'react'
import { Route, Routes } from 'react-router-dom'


const App = () => {
	return (
		<>
			<GlobalStyle/>
			<NoiseBg/>
			<Routes>
				<Route path={ ROUTES.MAIN } element={ <Main/> }/>
			</Routes>
		</>
	)
}

export default App
