import SERVICE_IDENTIFIER from "../identifiers";
import IUserService from "../services/interfaces/IUser-service";
import { resolve } from "../dependencymanagement"
import * as express from "express"

const router = express.Router();

function getUserService(): IUserService {
    return resolve<IUserService>(SERVICE_IDENTIFIER.UserService);
}
const userService = getUserService();


router.post('/', async(req: any, res: any) => {
    const { password, email, firstName, lastName } = req
    let result = await userService.create({ password, email, firstName, lastName })
    res.send(result)
})



router.get('/', async(req: any, res: any) => {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 1;
    let result = await userService.find(page,limit)
    res.send(result)
})


module.exports = router;

