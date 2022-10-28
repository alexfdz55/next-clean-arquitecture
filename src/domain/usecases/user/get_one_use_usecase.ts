import { User } from "../../models/user_model";


export interface GetOneUserUseCase{
    getOne: ()=> Promise<User>,
}