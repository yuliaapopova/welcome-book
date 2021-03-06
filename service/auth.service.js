import jwt from 'jsonwebtoken';
import UserService from './user.service.js';

class AuthService {
	constructor() {
		this.userService = new UserService();
		this.validateUser = this.validateUser.bind(this);
		this.isValidPassword = this.isValidPassword.bind(this);
		this.createToken = this.createToken.bind(this);
		this.checkRights = this.checkRights.bind(this);
	}

	async validateUser(email) {
		try {
			const user = await this.userService.findByEmail(email);
			if (user) {
				return user;
			}
			return null;
		} catch (e) {
			console.error(`AuthService.validateUser ex ${e.message}`);
			throw Error(e.message);
		}
	}

	async isValidPassword(user, password) {
		try {
			return user.password === password ? true : false;
		} catch (e) {
			console.error(`AuthService.isValidPassword ex ${e.message}`);
			throw Error(e.message);
		}
	}

	async createToken(user) {
		try {
			const payload = { id: user.id, email: user.email, role: user.role };
			const token = jwt.sign(payload, 'welcomeBook', { expiresIn: '6h' });
			console.log('token', token)
			return {
				token: token
			};
		} catch (e) {
			console.error(`AuthService.createToken ex ${e.message}`);
			throw Error(e.message);
		}
	}

	async checkRights(user) {
		try {
			const payload = { id: user.id, email: user.email, isAdmin: user.isAdmin };
			const token = jwt.sign(payload, 'welcomeBook', { expiresIn: '6h' });
			console.log('token', token)
			return {
				token: token
			};
		} catch (e) {
			console.error(`AuthService.checkRights ex ${e.message}`);
			throw Error(e.message);
		}
	}
}

export default AuthService;
