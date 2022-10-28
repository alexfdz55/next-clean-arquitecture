import { FC, ReactNode, useEffect, useReducer, useState } from 'react';
import { User } from '../../../../../domain/models/user_model';
import UserUseCases from '../../../../../domain/usecases/user_usecases';
import { ApiResponse, useFetch2 } from '../../../../../hooks/useFetch';
import { HomeContext } from './homeContext';
import { homeReducers } from './homeReducers';


export interface UsersState {
    users: User[];
}


const USERS_INITIAL_STATE: UsersState = {
    users: [],
}

type Props = {
    children: JSX.Element,
};


export const HomeProvider: FC<Props> = ({ children }) => {

    // const [loading, setLoading] = useState<boolean>(false);
    // const [error, setError] = useState<Error | null>(null);

    const { data, error, loading, getAPIData }: ApiResponse = useFetch2(() => userUseCases.getAllUsers());



    const userUseCases = new UserUseCases();
    // const { data, error, loading, getAPIData }: ApiResponse = useFetch2(()=>userUseCases.getAllUsers());


    const [state, dispatch] = useReducer(homeReducers, USERS_INITIAL_STATE);

    // const getAllUsers = async () => {
    //     setLoading(true);
    //     setError(null);

    //     try {
    //         await new Promise(r => setTimeout(r, 1000));

    //         const users = await userUseCases.getAllUsers();
    //         dispatch({ type: 'Refresh-Data', payload: users });

    //     } catch (error: any) {
    //         console.log('<<<<<<<<< error >>>>>>>>>>>')
    //         console.log('error aqui: ' + error);
    //         setError(error);
    //     }
    //     setLoading(false);

    // }


    const getAllUsers = async () => {

     await   getAPIData();
     dispatch({ type: 'Refresh-Data', payload: data as User[] });
    }


    const getOneUser = async (id: number) => {

        const user = await userUseCases.getOneUser(id);
        dispatch({ type: 'Get-One-User', payload: user });
    }

    const addUser = async (user: User) => {

        // const newUser = await userUseCases.getOneUser(1);
        await new Promise(r => setTimeout(r, 500));

        dispatch({ type: 'Add-User', payload: user });

    }

    const updateUser = async (user: User) => {

        // const updateUser = await userUseCases.getOneUser(1);
        await new Promise(r => setTimeout(r, 500));
        dispatch({ type: 'User-Updated', payload: user });
    }

    const deleteUser = async (user: User) => {

        // const updateUser = await userUseCases.getOneUser(1);
        console.log('borrando user');
        await new Promise(r => setTimeout(r, 1000));
        dispatch({ type: 'Delete-User', payload: user });
    }

    const searchUserById = async (id: number) => {
       await getAllUsers();
        // const updateUser = await userUseCases.getOneUser(1);
        console.log('buscando user');
        await new Promise(r => setTimeout(r, 200));
        dispatch({ type: 'Search-User-ById', payload: id });
    }


    // useEffect(() => {
    //     getAllUsers();
    // }, []);



    return (
        <HomeContext.Provider value={{
            ...state,
            error,
            loading,

            // Methods
            getAllUsers,
            getOneUser,
            addUser,
            updateUser,
            deleteUser,
            searchUserById,

        }}>
            {children}
        </HomeContext.Provider>
    )
};