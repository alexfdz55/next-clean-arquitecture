import { Container, Button, Stack, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { UserCard } from '../../../../components/UserCard';
import { User } from '../../../../domain/models/user_model';
import { HomeContext } from './context/homeContext';
import { useState } from 'react';
import { UserForm } from './components/UserForm';
export interface HomePageInterface { }

const HomePage: React.FC<HomePageInterface> = () => {

	// const userUseCases = new UserUseCases();
	// const { data, error, loading, getAPIData }: ApiResponse = useFetch2(()=>userUseCases.getAllUsers());

	// const fetchData = async () => {
	//   await getAPIData();
	// }

	const { users,
		error,
		loading,
		getAllUsers,
		getOneUser,
		// addUser,
		// updateUser,
		deleteUser,
		searchUserById,
	} = useContext(HomeContext);

	console.log('users: ' + users);

	const [number, setnumber] = useState(1);

	return (

		<Container>
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={2}
			>
				<Stack
					direction="column"
					justifyContent="flex-start"
					alignItems="flex-start"
					spacing={2}
				>
					<Button
						variant='contained'
						onClick={getAllUsers}
					>
						Get users
					</Button>
					<Button
						variant='contained'
						onClick={() => {
							setnumber(number + 1)
							getOneUser(number)
						}}
					>
						Get one user
					</Button>

					<TextField
						id="outlined-basic"
						label="Buscar por id"
						variant="outlined"
						onChange={(e) => {
							searchUserById(parseInt(e.target.value))
						}}
					/>
				</Stack>
				<UserForm />
			</Stack>


			{loading && <div> Cargando...</div>}
			{error && error.name === 'UnexpectedError' ? <div>Ha ocurrido un error</div> : ''}

			{users && <div>
				{users.map((user: User) =>
					<UserCard
						key={user.id}
						user={user}
						onDelete={() => deleteUser(user)}
					/>
				)}
			</div>
			}
		</Container>

	)
};

export default HomePage;
