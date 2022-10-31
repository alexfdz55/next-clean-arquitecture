import { createContext } from 'react';
import { Post } from '../../../../domain/models';


interface ContextProps {
    posts: Post[];
    error: Error | null;
    loading: boolean;
    getAllPosts: () => void;
}


export const HomeVerumContext = createContext({} as ContextProps );