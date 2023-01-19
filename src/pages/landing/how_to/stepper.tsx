import { Stack, Typography } from '@mui/material'
import { theme } from '../../../utils'

type Props = {
	steps: Array<string>
	stepMaxWidth: number
	title: string
}

const HowToStepper = (props: Props) => {
	return (
		<Stack spacing={10}>
			<Stack
				sx={{
					maxWidth: 600,
					minHeight: {
						md: 54
					}
				}}
			>
				<Typography
					variant='h5'
					component='h3'
					sx={({ palette: p }) => ({
						color: p.grey[200],
						textAlign: {
							xs: 'center',
							sm: 'left'
						}
					})}
				>
					{props.title}
				</Typography>
			</Stack>
			<Stack
				spacing={4}
				sx={({ spacing }) => ({
					pl: {
						sm: 3
					},
					position: 'relative',
					'&::before': {
						content: {
							sm: '""'
						},
						left: 50,
						width: 3,
						bottom: 0,
						top: 0,
						borderRight: 'thin dashed #eee',
						position: 'absolute'
					}
				})}
			>
				{props.steps.map((step, i) => (
					<Stack
						key={i}
						spacing={4}
						direction={{
							sm: 'row'
						}}
						sx={({ spacing }) => ({
							alignItems: 'center'
						})}
					>
						{/* Circle */}
						<Stack
							sx={({ palette: p }) => ({
								minWidth: 60,
								height: 60,
								bgcolor: p.grey[100],
								borderRadius: 24,
								alignItems: 'center',
								justifyContent: 'center'
							})}
						>
							<Typography sx={{ fontWeight: 700, color: theme.colorPrimary }}>
								Step{i + 1}
							</Typography>
						</Stack>
						<Stack
							sx={{
								maxWidth: props.stepMaxWidth,
								mt: {
									xs: 1,
									sm: 0
								}
							}}
						>
							{/* Text */}
							<Typography
								sx={({ palette: p }) => ({
									color: p.grey[100],
									fontWeight: 400,
									textAlign: {
										xs: 'center',
										sm: 'left'
									}
								})}
							>
								{step}
							</Typography>
						</Stack>
					</Stack>
				))}
			</Stack>
		</Stack>
	)
}

export default HowToStepper
