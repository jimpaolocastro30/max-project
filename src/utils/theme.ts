import { createTheme } from '@mui/material'

const bodyFont = ['Recoleta', 'sans-serif'].join(',')
const subtitleFont = ['Poppins', 'sans-serif'].join(',')

const theme = createTheme({
	typography: (p) => ({
		allVariants: {
			fontFamily: bodyFont
		},
		subtitle1: {
			fontFamily: subtitleFont
		},
		subtitle2: {
			fontFamily: subtitleFont
		}
	})
})

export const colorPrimary = '#720912'
export const colorSecondary = '#5F5FBF'

export default theme
