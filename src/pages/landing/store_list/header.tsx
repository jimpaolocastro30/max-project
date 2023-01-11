import CancelIcon from '@mui/icons-material/Cancel'
import { IconButton, Stack, Typography } from '@mui/material'
import { colorPrimary } from '../../../utils/theme'

type Props = {
	onClose: () => void
}

const ListOfStoresHeader = (props: Props) => {
	return (
		<Stack>
			<Stack
				direction='row'
				sx={{ justifyContent: 'flex-end' }}
			>
				<IconButton onClick={props.onClose}>
					<CancelIcon />
				</IconButton>
			</Stack>
			<Typography
				sx={({ palette: p }) => ({
					textAlign: 'center',
					color: colorPrimary,
					fontWeight: 700
				})}
				variant='h6'
			>
				List of Max's Branches
			</Typography>
		</Stack>
	)
}

export default ListOfStoresHeader
