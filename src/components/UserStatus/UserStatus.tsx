import { Button, Stack, CircularProgress } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../domain/models';
import { AppStore } from '../../redux/store';
import { ApiResponse, useFetch, useFetch2 } from '../../hooks/useFetch';
import { UserUseCases } from '../../domain/usecases/user.usecases';
import { login, logout } from '../../redux/states/user';

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Close';


export interface UserStatusInterface { }

const UserStatus: React.FC<UserStatusInterface> = () => {

	const userState: User = useSelector((store: AppStore) => store.user);

	console.log('userState: ' + userState.id);

	const dispatch = useDispatch();

	const userUsesCases = new UserUseCases();

	const { data, error, loading, getAPIData }: ApiResponse<User> = useFetch({
		request: () => userUsesCases.getOneUser(1),
		isLoadedCallback: (user) => dispatch(login(user)),
		executeAtInit: false,
	});



	const onLogin = async () => {
		await getAPIData();
	}

	const onLogout = () => {
		dispatch(logout());
	}


	return (
		<Stack
			direction="row"
			justifyContent="center"
			alignItems="center"
			spacing={2}
		>
			{
				data !== undefined && <h3>{data.name}</h3>
			}
			{
				userState.id === 0 ?
					<Button
						variant='outlined'
						onClick={onLogin}
						startIcon={loading ?
							<CircularProgress
								thickness={6}
								size='20px'
							// sx={{ color: 'white' }}
							/>
							:
							<LoginIcon />

						}
					>
						Login
					</Button> :
					<Button
						variant='outlined'
						startIcon={
							<LogoutIcon />

						}
						onClick={onLogout}
					>
						Logout
					</Button>


			}
			{/* <div>
				{userState.id !== 0 &&

					<h3>Wellcome {userState.name}</h3>}
			</div> */}


		</Stack>)


};

export default UserStatus;
