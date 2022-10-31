import { User } from "../models/user_model"
import { UserRepository, IUserRepository } from '../../data/repositories/user.repository';



export interface IUserUseCase {
    getAllUsers(): Promise<User[]>;
    getOneUser(id: number): Promise<User>;

}


export class UserUseCases implements IUserUseCase {
    userRepository: IUserRepository;

    constructor(
        // private readonly userRepository: UserRepositoryInterface
    ) {
        this.userRepository = new UserRepository();
     }

    getOneUser(id: number): Promise<User> {
        return this.userRepository.getOne(id);
    }

    getAllUsers(params?: any): Promise<User[]> {
        return this.userRepository.getAll(params);
    }
}

