import React from 'react'
import { Grid, Stack, styled } from '@mui/material'
import { Background1, Background2 } from '../../assets'

type Props = {
	children: React.ReactNode
}

const LandingHero = (props: Props) => {
	return (
		<Stack
			sx={{
				flex: 1,
				position: 'relative',
				maxHeight: {
					md: '100vh'
				},
				overflow: {
					md: 'hidden'
				}
			}}
		>
			<Grid
				container
				sx={{
					display: 'flex',
					flex: 1
				}}
			>
				<Grid
					item
					xs={12}
					md={5}
					lg={4}
				>
					<Image
						src={Background1}
						sx={{
							objectFit: 'cover',
							opacity: 0.03,
							position: {
								xs: 'fixed',
								md: 'static'
							},
							minHeight: '100vh'
						}}
					/>
				</Grid>
				<Grid
					item
					md={7}
					lg={8}
				>
					<Image
						src={Background2}
						sx={{ objectFit: 'cover' }}
					/>
				</Grid>
			</Grid>
			{props.children}
		</Stack>
	)
}

const Image = styled('img')(({ theme }) => ({
	width: '100%',
	height: '100%'
}))

export default LandingHero
