import { User } from "../../models/user_model";


export interface GetAllUserUseCase{
    getAll: ()=> Promise<User[]>,
}