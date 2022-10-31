import { Button, Card, CardActions, CardContent, CircularProgress, Stack, Typography } from '@mui/material';
import { User } from '../../domain/models/user_model';
import DeleteIcon from '@mui/icons-material/Delete';

export interface UserCardProps {
	user: User,
	loading: boolean,
	onDelete: () => void,
}

const UserCard: React.FC<UserCardProps> = ({ user, loading, onDelete }) => {

	return <Card
		sx={{ minWidth: 275, backgroundColor: 'gray', margin: '20px' }}>
		<CardContent>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="flex-start"
				spacing={2}
			>
				<div>
					<Typography variant="h5" component="div">
						User
					</Typography>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						{user.name}
					</Typography>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						{user.username}
					</Typography>



					<Typography sx={{ mb: 1.5 }} color="text.secondary">
						{user.email}
					</Typography>
				
				
				</div>


			</Stack>

		</CardContent>
		<CardActions>
			<Button
				disabled={loading}
				startIcon={loading ?
					<CircularProgress
						thickness={6}
						size='20px'
						sx={{ color: 'white' }}
					/>
					:
					<DeleteIcon />

				}
				sx={{ ":disabled": { color: 'white' } }}
				variant='contained'
				color='error'
				size="small"
				onClick={onDelete}
			>
				Borrar
			</Button>
		</CardActions>
	</Card>
};

export default UserCard;
