import { HttpStatusCode } from '../../constants/enums/http_status_code';
import { UnexpectedError } from '../../domain/errors';
import { Post } from '../../domain/models';
import { AxiosHttpClient } from '../../protocols/http/axios-http-client';


export interface IPostRepository {
    getAll(params?: any): Promise<Post[]>;
}


export class PostRepository implements IPostRepository {
    axiosHttpClient: AxiosHttpClient;
    constructor() {
        this.axiosHttpClient = new AxiosHttpClient();
    }

    async getAll(params?: any): Promise<Post[]> {
        const axiosRequest = await this.axiosHttpClient.request({
            url: 'posts',
            method: 'get',
            params: params,
        });

        if (axiosRequest.statusCode === HttpStatusCode.ok) {
            const users = axiosRequest.body as Post[];

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