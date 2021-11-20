import UserDTO from "../../models/dtomodels/userdto";

/**
 * User Interface
 */
 export default interface IUserService {

    /**
     * 
     * @param userDto 
     */
    create(userDto: UserDTO)

}