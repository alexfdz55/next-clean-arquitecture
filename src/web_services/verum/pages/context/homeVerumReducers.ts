import { Post } from "../../../../domain/models";
import { PostsState } from "./homeVerumProvider";

type PostsActionType =
   | { type: 'Refresh-Data', payload: Post[] }
   | { type: 'Get-One-Post', payload: Post }
   | { type: 'Add-Post', payload: Post }
   | { type: 'Post-Updated', payload: Post }
   | { type: 'Delete-Post', payload: Post }





export const homeVerumReducers = (state: PostsState, action: PostsActionType): PostsState => {

   switch (action.type) {
      case 'Refresh-Data':
         // console.log(...action.payload);
         return {
            ...state,
            posts: [...action.payload]
         }

      case 'Get-One-Post':
         return {
            ...state,
            posts: [...state.posts, action.payload]
         }


      case 'Add-Post':
         return {
            ...state,
            posts: [...state.posts, action.payload]
         }

      case 'Post-Updated':
         return {
            ...state,
            posts: state.posts.map(post => {
               if (post.id === action.payload.id) {
                  post.body = action.payload.body;
                  post.title = action.payload.title;
               }
               return post;
            })
         }

      case 'Delete-Post':
         return {
            ...state,
            posts: [...state.posts.filter(post => post.id !== action.payload.id)]
         }


      default:
         return state;
   }

}