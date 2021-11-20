import { inject, injectable } from "inversify";
import SERVICE_IDENTIFIER from "../../identifiers";
import UserDTO from "../../models/dtomodels/userdto";
import IUserRepository from "../../repositories/interfaces/user";
import IUserService from "../interfaces/IUser-service";

@injectable()
class UserService implements IUserService {
    constructor(
        @inject(SERVICE_IDENTIFIER.UserRepository)
        private UserRepository: IUserRepository
    ) { }

    async create(userDto: UserDTO) {
        try{

            let result = await this.UserRepository.create(userDto)
            console.log(result)
        }catch(err){
            console.log(err)
        }
    }
}

export default UserService