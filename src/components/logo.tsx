import React from 'react'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import { Logo } from '../assets'

type Props = {}

const CompanyLogo = (props: Props) => {
	return (
		<Link to='/'>
			<ReactSVG
				src={Logo}
				beforeInjection={(svg) => {
					svg.setAttribute('style', 'width:128px')
					svg.setAttribute('style', 'height:auto')
				}}
			/>
		</Link>
	)
}

export default CompanyLogo
