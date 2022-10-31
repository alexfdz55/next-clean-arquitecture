import { Post } from "../../domain/models/posts_model";


export const postAdapter = (post: any): Post => ({
    id: post.id, 
    title: post.title,
    body: post.body,
});