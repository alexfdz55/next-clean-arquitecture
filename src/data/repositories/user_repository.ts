import { HttpStatusCode } from '../../constants/enums/http_status_code';
import { UnexpectedError } from '../../domain/errors';
import { User } from '../../domain/models/user_model';
import { AxiosHttpClient } from '../../protocols/http/axios-http-client';


export interface IUserRepository {
    getAll(): Promise<User[]>;
    getOne(id: number): Promise<User>;
    // add(user: User): Promise<User>;
    // update(id: number): Promise<User>;
    // delete(id: number): Promise<User>;
}







export class UserRepository implements IUserRepository {
    axiosHttpClient: AxiosHttpClient;
    constructor() {
        this.axiosHttpClient = new AxiosHttpClient();
    }
    async getOne(id: number): Promise<User> {
        const axiosRequest = await this.axiosHttpClient.request({
            url: `users/${id.toString()}`,
            method: 'get',
        });

        if (axiosRequest.statusCode === HttpStatusCode.ok) {
            const user = axiosRequest.body as User;

            // console.log('user: '+ axiosRequest);

            return user;
        }

        else if (axiosRequest.statusCode === HttpStatusCode.notFound) {
            throw new UnexpectedError();
        } else {
            throw new UnexpectedError();
        }

    }



    async getAll(): Promise<User[]> {
        const axiosRequest = await this.axiosHttpClient.request({
            url: 'users',
            method: 'get',
        });

        if (axiosRequest.statusCode === HttpStatusCode.ok) {
            const users = axiosRequest.body as User[];

            // console.log('user: '+ axiosRequest.body);

            return users;
        }

        else if (axiosRequest.statusCode === HttpStatusCode.notFound) {
            throw new UnexpectedError();
        } else {
            throw new UnexpectedError();
        }

    }

}