export interface User {

    id: number,
    name: string,
    email: string,
    username?: string,
    address?: Address,
    phone?: string,
    website: string,
    company?: Company,
}


interface Geo {
    lat: string,
    lng: string,
}

interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo,
}


interface Company{
    name: string,
    catchPhrase: string,
    bs: string,
}