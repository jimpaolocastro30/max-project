import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Button, Stack, styled, Typography } from '@mui/material'
import { theme } from '../../utils'
import { CompanyLogo } from '../../components'

type Props = {
	onToggleListOfStores: () => void
}

const Footer = (props: Props) => {
	return (
		<Stack
			component='footer'
			sx={({ palette: p }) => ({
				color: p.grey[200],
				alignItems: 'center',
				p: 3,
				textAlign: 'center'
			})}
			spacing={10}
		>
			<Stack spacing={4}>
				<Typography
					variant='h5'
					sx={{ fontWeight: 600 }}
				>
					This installment offer is available in selected stores only.
				</Typography>
				<Stack
					spacing={{
						xs: 1,
						md: 0
					}}
				>
					<Typography>
						Check here our{' '}
						<Button
							variant='text'
							sx={{
								textTransform: 'none',
								color: theme.colorSecondary,
								fontSize: 'inherit',
								lineHeight: 1.1,
								px: 0.5,
								transform: 'translateY(-1px)',
								'& .MuiButton-startIcon': {
									margin: 0
								}
							}}
							onClick={props.onToggleListOfStores}
							startIcon={<ArrowRightIcon htmlColor={theme.colorSecondary} />}
						>
							<Typography>List of Stores</Typography>
						</Button>{' '}
						all call your preferred branch to cater to your celebrations.
					</Typography>
					<Typography>
						Visit{' '}
						<Link
							href='https://www.maxsgroupdelivers.com'
							rel='noreferrer noopener'
							target='_blank'
						>
							maxsgroupdelivers.com
						</Link>{' '}
						to view our list of stores and call your preferred branch to cater
						to your celebrations.
					</Typography>
					<Typography>
						You may also send us a message at
						<Link href='mailto:customercare@maxsgroupinc.com'>
							customercare@maxsgroupinc.com
						</Link>{' '}
						Max's RESTAURANT since 1945
					</Typography>
				</Stack>
			</Stack>
			<CompanyLogo />
		</Stack>
	)
}

const Link = styled('a')(({ theme: muiTheme }) => ({
	color: theme.colorSecondary,
	margin: '0 .3ch'
}))

export default Footer
