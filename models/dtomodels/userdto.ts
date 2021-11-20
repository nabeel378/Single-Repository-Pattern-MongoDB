import BaseDTO from "./basedto";

class UserDTO extends BaseDTO {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export default UserDTO;