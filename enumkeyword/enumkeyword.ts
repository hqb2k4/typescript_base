// Enum Type takes numeric values by default starting from 0
enum API_Status {
    PEDDING, 
    FULFILLED,
    REJECTED
}

let apistatus1 = API_Status.FULFILLED;
let apistatus2 = API_Status.REJECTED;
console.log(`Status 1: ${apistatus1}, Status 2: ${apistatus2}`); // 1

// Enum Type take string values
enum User_Role {
    ADMIN = "ADMIN",
    MODERATOR = "MODERATOR",
    USER = "USER"
}   
let userRole1 = User_Role.ADMIN;
let userRole2 = User_Role.USER;
console.log(`User Role 1: ${userRole1}, User Role 2: ${userRole2}`); // ADMIN, USER 