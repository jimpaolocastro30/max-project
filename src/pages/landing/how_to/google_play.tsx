import React from 'react'
import { Box, Stack, styled, Typography } from '@mui/material'
import { HomeCreditIcon } from '../../../components'
import { ReactSVG } from 'react-svg'
import { GooglePlayImage } from '../../../assets'

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
			>
				<Box>
					<ReactSVG src={GooglePlayImage} />
				</Box>
			</DownloadLink>
		</Stack>
	)
}

const DownloadLink = styled('a')(({ theme }) => ({
	backgroundColor: 'transparent'
}))

export default GetItOnGooglePlay
