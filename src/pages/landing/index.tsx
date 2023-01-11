import React from 'react'
import { Modal, Stack, Zoom } from '@mui/material'
import Footer from './footer'
import LandingHero from './hero'
import HowToSection from './how_to'
import IntroductionSection from './introduction'
import ListOfStores from './store_list'

type Props = {}

const LandingPage = (props: Props) => {
	const [showListOfStores, setShowListOfStores] = React.useState<boolean>(true)

	const handleToggleListOfStores = () =>
		setShowListOfStores((prevState) => !prevState)

	return (
		<Stack sx={{ flex: 1 }}>
			<LandingHero>
				<IntroductionSection />
			</LandingHero>
			<HowToSection />
			<Footer onToggleListOfStores={handleToggleListOfStores} />
			<ListOfStores
				show={showListOfStores}
				onClose={handleToggleListOfStores}
			/>
		</Stack>
	)
}
export default LandingPage
