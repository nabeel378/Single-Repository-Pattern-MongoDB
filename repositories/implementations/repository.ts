import { injectable } from "inversify";
import IRepository from "../interfaces/Irepository";
import BaseRepository from "./baserepository"

@injectable()
export default abstract class Repository<T> extends BaseRepository<T> implements IRepository<T>  {


}

