import { User } from "../../domain/models"


class UserDTO implements User {
    readonly id: number
    readonly name: string
    readonly email: string
    readonly username: string

    constructor(params: any) {
        this.id = params.id
        this.name = params.name
        this.email = params.email
        this.username = params.username
    }

}

export default UserDTO