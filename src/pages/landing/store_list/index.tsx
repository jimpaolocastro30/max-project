import React from 'react'
import { Modal, Paper, Stack, Typography, Zoom } from '@mui/material'
import data from './data'
import ListOfStoresHeader from './header'

type Props = {
	show: boolean
	onClose: () => void
}

const ListOfStores = (props: Props) => {
	return (
		<Modal
			open={props.show}
			component={Stack}
			sx={{
				position: 'fixed',
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				alignItems: 'center',
				justifyContent: 'center',
				p: 2
			}}
			onClose={props.onClose}
		>
			<Zoom in={props.show}>
				<Paper
					flex={1}
					sx={({ palette: p }) => ({
						maxHeight: '80vh',
						maxWidth: '85%',
						bgcolor: p.grey[50],
						width: '100%',
						borderRadius: 3,
						p: 2
					})}
					component={Stack}
					elevation={5}
					spacing={3}
				>
					<ListOfStoresHeader onClose={props.onClose} />
					<Stack
						sx={{ flex: 1, overflowY: 'auto', alignItems: 'center' }}
						spacing={1}
					>
						{data.map((branch, i) => (
							<Typography
								key={i}
								variant='body2'
							>
								{branch}
							</Typography>
						))}
					</Stack>
				</Paper>
			</Zoom>
		</Modal>
	)
}

export default ListOfStores
