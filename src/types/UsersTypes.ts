export type GetUsersType = {
    id: number
    name: string
    username: string
    email: string
    address: AddressType
    phone: string
    website: string
    company: CompanyType
}

export type UserPostType = {
    userId: number
    id: number
    title: string
    body: string
}

export type UserPostCommentsType = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

type AddressType = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: GeoType
}

type GeoType = {
    lat: string
    lng: string
}

type CompanyType = {
    name: string
    catchPhrase: string
    bs: string
}

