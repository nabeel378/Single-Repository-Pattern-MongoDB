import { model, Schema, Model } from 'mongoose';
import UserDTO from '../dtomodels/userdto';

const DB_NAME = 'users';

const UserSchema: Schema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
});

const User: Model<UserDTO> = model(DB_NAME, UserSchema);

export default User