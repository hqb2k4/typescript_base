// Enum Type takes numeric values by default starting from 0
var API_Status;
(function (API_Status) {
    API_Status[API_Status["PEDDING"] = 0] = "PEDDING";
    API_Status[API_Status["FULFILLED"] = 1] = "FULFILLED";
    API_Status[API_Status["REJECTED"] = 2] = "REJECTED";
})(API_Status || (API_Status = {}));
var apistatus1 = API_Status.FULFILLED;
var apistatus2 = API_Status.REJECTED;
console.log("Status 1: ".concat(apistatus1, ", Status 2: ").concat(apistatus2)); // 1
// Enum Type take string values
var User_Role;
(function (User_Role) {
    User_Role["ADMIN"] = "ADMIN";
    User_Role["MODERATOR"] = "MODERATOR";
    User_Role["USER"] = "USER";
})(User_Role || (User_Role = {}));
var userRole1 = User_Role.ADMIN;
var userRole2 = User_Role.USER;
console.log("User Role 1: ".concat(userRole1, ", User Role 2: ").concat(userRole2)); // ADMIN, USER 
var userRole3 = ADMIN;
