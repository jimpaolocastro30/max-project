import React from 'react'
import { Stack } from '@mui/material'
import { theme } from '../utils'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from '../pages'

type Props = {}

const App = (props: Props) => {
	return (
		<Stack
			sx={{
				minHeight: '100vh',
				bgcolor: theme.colorPrimary,
				width: '100%'
			}}
		>
			<Routes>
				<Route
					path='/'
					element={<LandingPage />}
				/>
			</Routes>
		</Stack>
	)
}

export default App
