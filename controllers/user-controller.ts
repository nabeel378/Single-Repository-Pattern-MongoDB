import SERVICE_IDENTIFIER from "../identifiers";
import IUserService from "../services/interfaces/IUser-service";
import { resolve } from "../dependencymanagement"
import * as express from "express"

const router = express.Router();

function getUserService(): IUserService {
    return resolve<IUserService>(SERVICE_IDENTIFIER.UserService);
}
const userService = getUserService();

router.post('/', (req: any, res: any) => {
    console.log(req.body)
    const { password, email, firstName, lastName } = req.body
    let result = userService.create({ password, email, firstName, lastName })
    console.log(result)
})



module.exports = router;
