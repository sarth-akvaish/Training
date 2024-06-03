// type User = {
//     readonly _id: string;
//     name: string;
//     email: string;
//     isACctive: boolean;
//     creaditCardDetails?: number
// }

// let myUser: User = {
//     _id: "1242",
//     name: "dsnksjf",
//     email: "kdfnsfn",
//     isACctive: false
// }

// myUser.email = "sarthak@gmail.com"

// Interfaces 

interface User {
    readonly db_id: number
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string,
    getCoupon(couponName: string, value: number): number
}

interface User {
    googleToken: string
}
const Hari: User = {
    db_id: 12, email: "hari@gmail.com", userId: 12313, googleToken: 'dfnsjdf',
    startTrail: () => {
        return 'checking'
    },
    getCoupon: (name: 'coupon200', value: 20) => {
        return value
    }
}



// difference between interface and type 
export { }