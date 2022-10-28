import { User } from "../../../../../domain/models/user_model";
import { UsersState } from "./homeProvider";



type UsersActionType =
   | { type: 'Refresh-Data', payload: User[] }
   | { type: 'Get-One-User', payload: User }
   | { type: 'Add-User', payload: User }
   | { type: 'User-Updated', payload: User }
   | { type: 'Delete-User', payload: User }
   | { type: 'Search-User-ById', payload: number }




export const homeReducers = (state: UsersState, action: UsersActionType): UsersState => {

   switch (action.type) {
      case 'Refresh-Data':
         // console.log(...action.payload);
         return {
            ...state,
            users: [...action.payload]
         }

      case 'Get-One-User':
         return {
            ...state,
            users: [...state.users, action.payload]
         }


      case 'Add-User':
         return {
            ...state,
            users: [...state.users, action.payload]
         }

      case 'User-Updated':
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.payload.id) {
                  user.name = action.payload.name;
                  user.email = action.payload.name;
               }
               return user;
            })
         }

      case 'Delete-User':
         return {
            ...state,
            users: [...state.users.filter(user=> user.id !== action.payload.id)]
         }

         case 'Search-User-ById':
            return {
               ...state,
               users: [...state.users.filter(user=> user.id == action.payload)]
            }

      default:
         return state;
   }

}