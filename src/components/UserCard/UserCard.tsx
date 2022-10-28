import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';
import { User } from '../../domain/models/user_model';

export interface UserCardProps {
	user: User
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
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
					<Typography variant="h5" component="div">
						Direccion:
					</Typography>
					<Typography variant="body2">
						{`${user.address.city}, ${user.address.street}, ${user.address.suite}`}
					</Typography>
				</div>

				<div>
					<Typography variant="h5" component="div">
						Empresa
					</Typography>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						{user.company.name}
					</Typography>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						{user.company.catchPhrase}
					</Typography>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						{user.company.bs}
					</Typography>
				</div>

			</Stack>

		</CardContent>
		{/* <CardActions>
			<Button size="small">Learn More</Button>
		</CardActions> */}
	</Card>
};

export default UserCard;
