import { Grid, Stack } from '@mui/material'
import HowToStepper from './stepper'
import GetItOnGooglePlay from './google_play'

type Props = {}

const HowToSection = (props: Props) => {
	return (
		<Stack
			component='section'
			sx={{
				pl: {
					sm: '7vw',
					md: '10vw'
				},
				py: {
					xs: 10,
					lg: 15
				},
				maxWidth: 'xl'
			}}
		>
			<Grid
				container
				sx={{ px: { xs: 3, sm: 0 } }}
				spacing={10}
			>
				<Grid
					item
					xs={12}
					md={5.5}
				>
					<Stack
						spacing={8}
						sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}
					>
						<HowToStepper
							title='Download the My CREDIT App on Google Play and create an account by following these easy steps:'
							steps={[
								'Log-in using your Facebook account or input your details.',
								'Verify your mobile number through the OTP sent to your registered mobile.',
								'Take a Selfie',
								'Create a 4-digit PIN to access the app securely.'
							]}
							stepMaxWidth={350}
						/>
						<GetItOnGooglePlay />
					</Stack>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
				>
					<HowToStepper
						title='How to Apply for Party Gives:'
						steps={[
							'Log-in to your account and sign-up for a loan by clicking "See Product Loan"',
							'Upload 1-2 IDs to scan and input your personal information.',
							'Wait for a real-time pre-approval notification on the app.',
							"Once approved, show proof of approval and your QR Code to a Max's representative for verification. Our representative will get the loan details and will input information required to the product calculator.",
							'Provide the downpayment for the loan application.',
							'Get your receipt and your booking confirmation.'
						]}
						stepMaxWidth={580}
					/>
				</Grid>
			</Grid>
		</Stack>
	)
}

export default HowToSection
