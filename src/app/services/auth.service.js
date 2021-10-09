import User from '../models/user'
import {BadRequest, Conflict, NotFound} from '../errors';
import { NOT_EXISTS,INVALID } from '../configs/constants';
import { Util } from "../helpers/util";

class AuthService {

    async signup(data) {
        const user = await User.findOne({
            where: {
                email: data.email
            }
        });
        if (user)  throw new Conflict('user is created');
        const createdUser = await User.create({
            ...data,
            password:Util.generateHash(data.password)
        });

        return createdUser;
    };

    async login(data) {
        let user = await User.findOne({
            where: {
                email: data.email
            },
            attributes:['email',"fullName","id"]

        })
        if (!user) {
            throw new NotFound(NOT_EXISTS('user'));
        }
        const isVerify = Util.validateHash(data.password,user.password)
        if(!isVerify) {
            throw new BadRequest(INVALID('password'))
        }

        return {
            accessToken:Util.createToken(user.id),
            user
        }
    }

}
export default new AuthService();
