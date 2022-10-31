import { createContext } from 'react';
import { User } from '../../../../../domain/models/user_model';


interface ContextProps {
    users: User[];
    error: Error | null;
    loading: boolean;
    loadingButton: boolean;
    userSelect: User | null;
    // Methods
    getAllUsers: () => void;
    getOneUser: (id: number) => void;
    addUser: (user: User) => void;
    updateUser: (user: User) => void;
    deleteUser: (user: User) => void;
    searchUserById: (id: number) => void;
    searchUserByName: (name: string) => void;
    searchUserByIdApi: (id: number) => void;


}


export const HomeContext = createContext({} as ContextProps );