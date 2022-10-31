import { User } from "../../domain/models/user_model";

export const userAdapter = (user: any): User => ({
    id: user.id,
    name: user.data.name,
    username: user.username,
    email: user.email,
  });