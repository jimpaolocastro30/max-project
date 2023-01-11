import React from 'react'
import { Box, Stack, styled, Typography } from '@mui/material'
import { HomeCreditIcon } from '../../../components'
import { ReactSVG } from 'react-svg'
import { GooglePlay, GooglePlayImage } from '../../../assets'

type Props = {}

const GetItOnGooglePlay = (props: Props) => {
	return (
		<Stack sx={{ alignItems: 'flex-start' }}>
			<Stack>
				<Stack
					sx={({ palette: p, typography: t }) => ({
						color: p.grey[400],
						alignItems: 'center'
					})}
					direction='row'
					spacing={1.3}
				>
					<Typography>Download</Typography>
					<HomeCreditIcon />
					<Typography>App via:</Typography>
				</Stack>
			</Stack>
			<DownloadLink
				href='https://play.google.com/store/apps/details?id=ph.homecredit.myhomecredit'
				rel='noreferrer noopener'
				target='_blank'
				sx={({ palette: p }) => ({
					// border: `thin solid ${p.grey[200]}`,
					// py: 1.7,
					// px: 2,
					// borderRadius: 2
				})}
			>
				{/* <Stack
					direction='row'
					spacing={3}
					sx={{ alignItems: 'center' }}
				>
					<ReactSVG src={GooglePlay} />
					<Box sx={({ palette: p }) => ({ color: p.grey[200] })}>
						<Typography
							variant='subtitle1'
							lineHeight={1}
						>
							Get it on
						</Typography>
						<Typography variant='subtitle1'>Google Play</Typography>
					</Box>
				</Stack> */}
				<Box>
					<ReactSVG
						src={GooglePlayImage}
						alt='Get it on Google Play'
						sx={{
							width: 188
						}}
					/>
				</Box>
			</DownloadLink>
		</Stack>
	)
}

const DownloadLink = styled('a')(({ theme }) => ({
	backgroundColor: 'transparent'
}))

export default GetItOnGooglePlay
