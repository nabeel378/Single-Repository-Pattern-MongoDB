import { inject, injectable } from "inversify";
import SERVICE_IDENTIFIER from "../../identifiers";
import { ResponseModel } from "../../utils/responsemodel";
import UserDTO from "../../models/dtomodels/userdto";
import IUserRepository from "../../repositories/interfaces/user";
import IUserService from "../interfaces/IUser-service";
import paginate, { IPaginated } from "../../utils/paginations";

@injectable()
class UserService implements IUserService {
    constructor(
        @inject(SERVICE_IDENTIFIER.UserRepository)
        private UserRepository: IUserRepository
    ) { }


    async find(page: number, limit: number): Promise<ResponseModel<IPaginated<UserDTO>>> {
        let response = new ResponseModel<IPaginated<UserDTO>>()
        try {
            let result:any = await this.UserRepository.find({}).skip((page-1)*limit).limit(limit)
            let paginated = paginate<any>(result,limit,page,'user')
            response.setSuccessAndData(paginated, '')

        } catch (err) {
            response.setServerError(err)
        }

        return response
    }

    async create(userDto: UserDTO): Promise<ResponseModel<UserDTO>> {
        let response = new ResponseModel<UserDTO>()
        try {
            let result = await this.UserRepository.create(userDto)
            response.setSuccessAndData(result, '')
        } catch (err) {
            response.setServerError(err)
        }
        return response
    }
}

export default UserService