import { User } from "../models/user_model"
import { UserRepository, IUserRepository } from '../../data/repositories/user_repository';



export interface IUserUseCase {
    getAllUsers(): Promise<User[]>;
    getOneUser(id: number): Promise<User>;

}


class UserUseCases implements IUserUseCase {
    userRepository: IUserRepository;

    constructor(
        // private readonly userRepository: UserRepositoryInterface
    ) {
        this.userRepository = new UserRepository();
     }

    getOneUser(id: number): Promise<User> {
        return this.userRepository.getOne(id);
    }

    getAllUsers(): Promise<User[]> {
        return this.userRepository.getAll();
    }
}

export default UserUseCases