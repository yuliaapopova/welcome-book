import AuthService from '../service/auth.service.js'

class AuthController {
    constructor() {
        this.authService = new AuthService();
        this.login = this.login.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    async login(req, res) {
        try {
            const user = await this.authService.validateUser(req.body.email);

            if (!user) {
                throw Error('User not found');
            }

            const validate = await this.authService.isValidPassword(user, req.body.password);

            if (!validate) {
                throw Error('Wrong Password');
            }

            const token = await this.authService.createToken(user);

            return res.status(200).json(token);
        } catch (e) {
            console.error(`AuthController.login ex ${e.message}`);
            return res.status(400).json({ error: e.message });
        }
    }

    async signUp(req, res) {
        try {
            return res.status(200).json({ status: 'success' });
        } catch (e) {
            console.error(`AuthController.signUp ex ${e.message}`);
            return res.status(400).json({ error: e.message });
        }
    }
}


export const authController = new AuthController();
