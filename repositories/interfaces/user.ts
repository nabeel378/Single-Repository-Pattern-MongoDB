import UserDTO from "../../models/dtomodels/userdto";
import IRepository from "./Irepository";

/**
 * User Interface
 */
export default interface IUserRepository extends IRepository<UserDTO> {

}