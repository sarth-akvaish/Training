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

// interface User {
//     readonly db_id: number
//     email: string,
//     userId: number,
//     googleId?: string,
//     startTrail(): string,
//     getCoupon(couponName: string, value: number): number
// }

// interface User {
//     googleToken: string
// }

// interface Admin extends User {
//     role: "admin" | "ta" | "user",
// }
// const Hari: Admin = {
//     role: "admin",
//     db_id: 12, email: "hari@gmail.com", userId: 12313, googleToken: 'dfnsjdf',
//     startTrail: () => {
//         return 'checking'
//     },
//     getCoupon: (name: 'coupon200', value: 20) => {
//         return value
//     }
// }



// difference between interface and type 


class User {
    public email: string
    private name: string
    readonly city: string = "Jaipur"
    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}

const a = new User("test@gmail.com", "test")
a.name

export { }