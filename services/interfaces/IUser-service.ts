import { ResponseModel } from "../../utils/responsemodel";
import UserDTO from "../../models/dtomodels/userdto";
import { IPaginated } from "../../utils/paginations";

/**
 * User Interface
 */
 export default interface IUserService {

    /**
     * 
     * @param userDto 
     */
    create(userDto: UserDTO):Promise<ResponseModel<UserDTO>>
    
    /**
     * 
     * @param page 
     * @param limit 
     */
    find(page:number,limit:number):Promise<ResponseModel<IPaginated<UserDTO>>>
}