export interface GetStorage {
    get: (key: string) => any
}


export interface SetStorage {
    set: (key: string, value: object) => void
}