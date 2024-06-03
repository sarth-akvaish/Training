"use strict";
// type User = {
//     readonly _id: string;
//     name: string;
//     email: string;
//     isACctive: boolean;
//     creaditCardDetails?: number
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }
// }
// const a = new User("test@gmail.com", "test")
// a.name
//Getter and Setter in Typescript
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Lucknow";
    }
    User.prototype.deleteToken = function () {
        console.log("Token");
    };
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Course count should be greater than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this._courseCount = 4;
    };
    return SubUser;
}(User));
var b = new User("test@hemail.com", "test");
console.log(b.courseCount);
b.courseCount = 5;
console.log(b.courseCount);
