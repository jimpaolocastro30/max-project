import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'
import App from './app'
import { theme } from './utils'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme.default}>
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</React.StrictMode>
)
