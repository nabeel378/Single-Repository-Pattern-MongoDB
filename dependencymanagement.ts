import "reflect-metadata";
import { Container } from "inversify";
import SERVICE_IDENTIFIER from "./identifiers";
import UserRepository from "./repositories/implementations/user";
import IUserRepository from "./repositories/interfaces/user";
import IUserService from "./services/interfaces/IUser-service";
import UserService from "./services/implementations/user-service";

let container = new Container();

container
    .bind<IUserRepository>(SERVICE_IDENTIFIER.UserRepository)
    .to(UserRepository);


container
    .bind<IUserService>(SERVICE_IDENTIFIER.UserService)
    .to(UserService);


export function resolve<T>(type: symbol): T {
    return container.get<T>(type)
}