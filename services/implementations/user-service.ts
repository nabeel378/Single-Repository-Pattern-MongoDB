import { inject, injectable } from "inversify";
import SERVICE_IDENTIFIER from "../../identifiers";
import { ResponseModel } from "../../models/dtomodels/responsemodel";
import UserDTO from "../../models/dtomodels/userdto";
import IUserRepository from "../../repositories/interfaces/user";
import IUserService from "../interfaces/IUser-service";

@injectable()
class UserService implements IUserService {
    constructor(
        @inject(SERVICE_IDENTIFIER.UserRepository)
        private UserRepository: IUserRepository
    ) { }

    async create(userDto: UserDTO):Promise<ResponseModel<UserDTO>>{
        let response = new ResponseModel<UserDTO>()
        try {
            let result = await this.UserRepository.create(userDto)
            response.setSuccessAndData(result,'')
        } catch (err) {
            response.setServerError(err)
        }
        return response
    }
}

export default UserService