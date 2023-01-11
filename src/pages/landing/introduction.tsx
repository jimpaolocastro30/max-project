import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { ArrowDownAnimation as animationData } from '../../assets'
import Lottie, { AnimationItem } from 'lottie-web'
import { CompanyLogo, HomeCreditIcon } from '../../components'

type Props = {}

const IntroductionSection = (props: Props) => {
	const arrowDownRef = React.useRef<HTMLDivElement | null>(null)

	React.useEffect(() => {
		const container = arrowDownRef.current
		let anim: AnimationItem | null = null
		if (container) {
			anim = Lottie.loadAnimation({
				animationData,
				container,
				loop: true,
				autoplay: true,
				renderer: 'svg'
			})
		}

		return () => {
			if (anim) anim.destroy()
		}
	}, [])

	return (
		<Stack
			component='section'
			sx={{
				zIndex: 5,
				p: 4,
				flex: 1,
				pl: {
					sm: '10vw'
				},
				position: {
					md: 'absolute'
				},
				top: 0,
				bottom: 0
			}}
			spacing={10}
			direction='column'
		>
			<CompanyLogo />
			<Stack
				sx={({ palette: p }) => ({
					justifyContent: 'space-around',
					flex: 1,
					color: p.grey[200]
				})}
			>
				<Stack>
					<Stack>
						<Typography
							component='h1'
							sx={({ typography: t }) => ({
								fontWeight: 800,
								fontSize: {
									xs: 64,
									sm: t.h1.fontSize,
									// md: t.h1.fontSize,
									lg: 102,
									xl: 128
								},
								lineHeight: 1,
								mb: 3
							})}
						>
							Party Gives!
						</Typography>
						<Typography
							variant='h5'
							sx={{
								fontWeight: 600,
								fontSize: {
									lg: 22,
									xl: 26
								}
							}}
						>
							Dream Party? Gawing reality with Installment Plans!
						</Typography>
					</Stack>
					<Stack
						sx={{
							fontSize: {
								xl: 19
							}
						}}
					>
						<Stack
							direction='row'
							sx={{
								flexWrap: 'wrap',
								gap: '0 1ch',
								alignItems: 'center',
								mt: 3
							}}
						>
							<Typography fontSize='inherit'>Avail of</Typography>
							<Stack
								sx={{ alignItems: 'center' }}
								direction='row'
							>
								<HomeCreditIcon />
								<Typography
									fontSize='inherit'
									sx={{ ml: '.4ch' }}
								>
									's
								</Typography>
							</Stack>
							<Typography fontSize='inherit'>
								event installment plan and
							</Typography>
						</Stack>
						<Typography fontSize='inherit'>
							get your last payment for FREE!
						</Typography>
					</Stack>
				</Stack>
				<Box
					sx={{
						width: 16,
						height: 85,
						display: {
							xs: 'none',
							md: 'initial'
						}
					}}
					ref={arrowDownRef}
				/>
			</Stack>
		</Stack>
	)
}

export default IntroductionSection
