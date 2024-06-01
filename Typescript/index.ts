type User = {
    readonly _id: string;
    name: string;
    email: string;
    isACctive: boolean;
    creaditCardDetails?: number
}

let myUser: User = {
    _id: "1242",
    name: "dsnksjf",
    email: "kdfnsfn",
    isACctive: false
}

myUser.email = "sarthak@gmail.com"


export { }