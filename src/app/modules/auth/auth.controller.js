import {
    SUCCESS_CODE
} from '../../configs/status-codes';
import AuthService from '../../services/auth.service';

export class AuthController {

    async signup(req, res, next) {
        try {
            const data = req.body;
            const user = await AuthService.signup(data);

            return res.status(SUCCESS_CODE).json(user);
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const data = req.body;
            const user = await AuthService.login(data);

            return  res.status(SUCCESS_CODE).json(user);
        } catch (e) {
            next(e);
        }
    }

}