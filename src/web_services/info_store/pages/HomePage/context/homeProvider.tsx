import { FC, useEffect, useReducer, useState } from 'react';
import { User } from '../../../../../domain/models/user_model';
import { UserUseCases } from '../../../../../domain/usecases';
import { ApiResponse, useFetch, useFetch2 } from '../../../../../hooks/useFetch';
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
    const [state, dispatch] = useReducer(homeReducers, USERS_INITIAL_STATE);

    const [initialData, setInitialData] = useState<User[]>([]);
    const [loadingButton, setLoadingButton] = useState<boolean>(false);
    const [userSelect, setUserSelect] = useState<User | null>(null);

    const userUseCases = new UserUseCases();



    const getAllUseFetch: ApiResponse<User[]> = useFetch({
        initialData: [],
        isLoadedCallback: (users) => {
            setInitialData(users);
            dispatch({ type: 'Refresh-Data', payload: users });
            console.log('users: ' + users);

        },
        request: (params) => userUseCases.getAllUsers(params),
        executeAtInit: false,
    });


    const getOneUseFetch: ApiResponse<User> = useFetch({
        initialData: null,
        isLoadedCallback:(user)=>    dispatch({ type: 'Get-One-User', payload: user }),
        request: (id) => userUseCases.getOneUser(id),
        executeAtInit: false,
    });


    const resetToInitialState = () => {
        dispatch({ type: 'Refresh-Data', payload: USERS_INITIAL_STATE.users });
    }


    const getAllUsers = async () => {
        resetToInitialState();
        await getAllUseFetch.getAPIData();
        // dispatch({ type: 'Refresh-Data', payload: data });
    }




    // const getAllUsers = async () => {
    //     resetToInitialState();

    //     try {
    //         await new Promise(r => setTimeout(r, 1000));

    //         const users = await userUseCases.getAllUsers();
    //         setInitialData(users);
    //         dispatch({ type: 'Refresh-Data', payload: users });

    //     } catch (error: any) {
    //         console.log('<<<<<<<<< error >>>>>>>>>>>')
    //         console.log('error aqui: ' + error);
    //         setError(error);
    //     }
    //     setLoading(false);

    // }



    const getOneUser = async (id: number) => {

        // const user = await userUseCases.getOneUser(id);
        await getOneUseFetch.getAPIData(id);
        // dispatch({ type: 'Get-One-User', payload: getOneUseFetch.data });
    }

    const addUser = async (user: User) => {

        await new Promise(r => setTimeout(r, 500));
        dispatch({ type: 'Add-User', payload: user });

    }

    const updateUser = async (user: User) => {
        await new Promise(r => setTimeout(r, 500));
        dispatch({ type: 'User-Updated', payload: user });
    }

    const deleteUser = async (user: User) => {
        setUserSelect(user);
        setLoadingButton(true);
        console.log('borrando user');
        await new Promise(r => setTimeout(r, 1000));
        dispatch({ type: 'Delete-User', payload: user });
        setLoadingButton(false);

    }

    const searchUserById = async (id: number) => {
        resetToInitialState();
        await getAllUseFetch.getAPIData({ id: id });
    }

    const searchUserByName = async (name: string) => {
        console.log('buscando user');
        await new Promise(r => setTimeout(r, 200));
        dispatch({ type: 'Search-User-ByName', payload: { name: name, users: initialData } });
    }

    const searchUserByIdApi = async (id: number) => {
        resetToInitialState();
        await getAllUseFetch.getAPIData({ id: id });
    }


    // useEffect(() => {
    //     // getAllUsers();
    // }, []);



    return (
        <HomeContext.Provider value={{
            ...state,
            error: getAllUseFetch.error,
            loading: getAllUseFetch.loading,
            loadingButton,
            userSelect,

            // Methods
            getAllUsers,
            getOneUser,
            addUser,
            updateUser,
            deleteUser,
            searchUserById,
            searchUserByName,
            searchUserByIdApi,

        }}>
            {children}
        </HomeContext.Provider>
    )
};