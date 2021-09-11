class UserService {
	constructor() {

		this.user = {
			id: 'c0a40a33-3473-4c85-95fa-a8a21624c590',
			email: process.env.ADMIN_LOGIN || 'admin@simbirsoft.com',
			password: process.env.ADMIN_PASS || '123456'
		}

		this.findOne = this.findOne.bind(this);

	}

	async findOne(email) {
		try {
			return email === this.user.email ? this.user : undefined;
		} catch (e) {
			console.error(`UserService.findOne ex ${e}`);
			throw Error(e.message);
		}
	}
}

export default UserService;
