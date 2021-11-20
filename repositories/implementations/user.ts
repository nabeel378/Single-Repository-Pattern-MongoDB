import Repository from "./repository";
import UserDTO from "../../models/dtomodels/userdto";
import IUserRepository from "../interfaces/user";
import UserModel from "../../models/repomodels/user"
import { injectable } from "inversify";

@injectable()
class UserRepository extends Repository<UserDTO> implements IUserRepository {
    model = UserModel

}

export default UserRepository