import {userModel} from "../model/user.model.js";
import {departmentModel} from "../model/department.model.js";

class UserService {
	constructor() {
		this.findOne = this.findOne.bind(this);
		this.find = this.find.bind(this);
		this.create = this.create.bind(this);
		this.findByEmail = this.findByEmail.bind(this);
	}

	async findByEmail(email) {
		try {
			return await userModel.findOne({email}).exec();
		} catch (e) {
			console.error(`UserService.findOne ex ${e}`);
			throw Error(e);
		}
	}

	async findOne(id) {
		try {
			return await userModel.findById(id).exec();
		} catch (e) {
			console.error(`UserService.findOne ex ${e}`);
			throw Error(e);
		}
	}

	async find(findCondition) {
		try {
			return await userModel.find(findCondition);
		} catch (e) {
			console.error(`UserService.findOne ex ${e}`);
			throw Error(e.message);
		}
	}

	async create(body) {
		try {
			const isUserExists = await userModel.findOne({email: body.email})
			console.log(isUserExists);
			if (!isUserExists) {
				const department = await departmentModel.findById(body.departmentId).exec()

				const user = new userModel({
					name: body.name,
					email: body.email.toLowerCase(),
					department: department,
					password: body.password
				});

				const saved = await user.save();
				console.log('saved', saved);
			} else {
				throw Error('User with this email has already been created');
			}
		} catch (e) {
			console.error(`UserService.create ex ${e}`);
			throw Error(e);
		}
	}
}

export default UserService;
