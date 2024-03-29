import { Container, Button, Stack, TextField, CircularProgress, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { UserCard } from '../../../../components/UserCard';
import { User } from '../../../../domain/models/user_model';
import { HomeContext } from './context/homeContext';
import { useState } from 'react';
import { UserForm } from './components/UserForm';
import { UserStatus } from '../../../../components/UserStatus';
import Link from 'next/link';
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
		loadingButton,
		userSelect,
		getAllUsers,
		getOneUser,
		// addUser,
		// updateUser,
		deleteUser,
		searchUserById,
		searchUserByName,
		searchUserByIdApi,
	} = useContext(HomeContext);


	const [number, setnumber] = useState(1);

	return (

		<Container>
			<UserStatus />
			<br />
			<Link href="/verum">
				<a>Ir a otra vista</a>
			</Link>
			<br />
			<br />
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="start"
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

					<Button
						variant='contained'
						onClick={() => searchUserByIdApi(1)}
					>
						Get User By id = 1
					</Button>

					<TextField
						id="outlined-basic"
						label="Buscar por id"
						variant="outlined"
						onChange={(e) => {
							searchUserById(parseInt(e.target.value))
						}}
					/>
					<TextField
						id="outlined-basic"
						label="Buscar por mombre"
						variant="outlined"
						onChange={(e) => {
							searchUserByName(e.target.value)
						}}
					/>
					<UserForm />
				</Stack>

				<div>
					<Grid
						container
						spacing={0}
						direction="column"
						alignItems="center"
						justifyContent="center"
						style={{ minHeight: '100vh', minWidth: '50vw' }}
					>

						<Grid item xs={3}>
							{loading && <CircularProgress size='100px' />}
							{error && error.name === 'UnexpectedError' ? <div>Ha ocurrido un error</div> : ''}

							{users && <div>
								{users.map((user: User) =>
									<UserCard
										key={user.id}
										user={user}
										loading={user.id === userSelect?.id && loadingButton}
										onDelete={() => {
											deleteUser(user)
										}}
									/>
								)}
							</div>
							}
						</Grid>

					</Grid>


				</div>
			</Stack>



		</Container>

	)
};

export default HomePage;
