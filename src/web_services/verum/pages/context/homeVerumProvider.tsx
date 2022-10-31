import { FC, useEffect, useReducer, useState } from "react";
import { Post } from "../../../../domain/models";
import { PostUseCases } from "../../../../domain/usecases";
import { HomeVerumContext } from "./homeVerumContext";
import { homeVerumReducers } from './homeVerumReducers';


export interface PostsState {
    posts: Post[];
}


const POSTS_INITIAL_STATE: PostsState = {
    posts: [],
}

type Props = {
    children: JSX.Element,
};


export const HomeVerumProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(homeVerumReducers, POSTS_INITIAL_STATE);

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const userUseCases = new PostUseCases();

    const resetToInitialState = () => {
        setError(null);
        dispatch({ type: 'Refresh-Data', payload: POSTS_INITIAL_STATE.posts });
    }


    const getAllPosts = async () => {
        resetToInitialState();
        setLoading(true);
        try {
            await new Promise(r => setTimeout(r, 1000));

            const users = await userUseCases.getAllPosts();
            dispatch({ type: 'Refresh-Data', payload: users });

        } catch (error: any) {
            console.log('<<<<<<<<< error >>>>>>>>>>>')
            console.log('error aqui: ' + error);
            setError(error);
        }
        setLoading(false);

    }


    useEffect(() => {
        getAllPosts();
    }, []);



    return (
        <HomeVerumContext.Provider value={{
            ...state,
            error,
            loading,
            // Methods
            getAllPosts,
        }}>
            {children}
        </HomeVerumContext.Provider>
    )
};