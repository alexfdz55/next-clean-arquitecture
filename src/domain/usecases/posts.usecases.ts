import { IPostRepository, PostRepository } from "../../data/repositories";
import { Post } from "../models";

export interface IPostUseCases {
    getAllPosts(): Promise<Post[]>;

}



export class PostUseCases implements IPostUseCases {
    postRepository: IPostRepository;

    constructor(
        // private readonly postRepository: PostRepositoryInterface
    ) {
        this.postRepository = new PostRepository();
     }


    getAllPosts(params?: any): Promise<Post[]> {
        return this.postRepository.getAll(params);
    }
}
