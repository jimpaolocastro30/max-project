import React from 'react'
import { styled } from '@mui/material'
import { HomeCreditLogo } from '../assets'

type Props = {}

const HomeCreditIcon = (props: Props) => {
	return <HomeCredit src={HomeCreditLogo} />
}

const HomeCredit = styled('img')(({ theme }) => ({
	width: 56,
	height: 'auto'
}))

export default HomeCreditIcon
