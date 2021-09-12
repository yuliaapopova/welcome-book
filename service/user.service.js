import {userModel} from "../model/user.model.js";
import {departmentModel} from "../model/department.model.js";
import {answerModel} from "../model/answer.model.js";

class AnswerService {
	constructor() {
		this.findOne = this.findOne.bind(this);
		this.find = this.find.bind(this);
		this.create = this.create.bind(this);
		this.findByEmail = this.findByEmail.bind(this);
		this.update = this.update.bind(this);
		this.createCondition = this.createCondition.bind(this);
		this.addSubordinates = this.addSubordinates.bind(this);
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

	async update({id, body}) {
		try {
			const userUpdate = await this.createCondition({body});
			console.log(userUpdate);
			return await userModel.updateOne({id}, {
				$set: userUpdate
			}).exec();
		} catch (e) {
			console.error(`AnswerService.findOne ex ${e}`);
			throw Error(e);
		}
	}

	async addSubordinates(id, body) {
		try {
			const userUpdate = await this.createCondition({body});
			console.log(userUpdate);
			return await userModel.updateOne({id}, {
				$push: {
					subordinates: body.subordinates
				}
			}).exec();
		} catch (e) {
			console.error(`AnswerService.findOne ex ${e}`);
			throw Error(e);
		}
	}

	 async createCondition({body}) {
		try {
			const userUpdate = {};

			if (body.name) {
				userUpdate.name = body.name;
			}

			if (body.email) {
				userUpdate.email = body.email
			}

			if (body.department) {
				userUpdate.department = body.department;
			}

			if (body.password) {
				userUpdate.password = body.password
			}

			if (body.roleId) {
				const role = await roleModel.findById(body.roleId).exec();
				console.log(role._id);
				userUpdate.role = role;
			}
			return userUpdate;

		} catch (e) {
			console.error(`userService.createCondition ex ${e}`);
			throw Error(e);
		}
	}
}

export default AnswerService;
