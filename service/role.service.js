import {roleModel} from "../model/role.model.js";

class RoleService {
    constructor() {
        this.findOne = this.findOne.bind(this);
        this.find = this.find.bind(this);
        this.create = this.create.bind(this);
    }

    async findOne(id) {
        try {
            return await roleModel.findById(id).exec();
        } catch (e) {
            console.error(`RoleService.findOne ex ${e}`);
            throw Error(e);
        }
    }

    async find(findCondition) {
        try {
            return await roleModel.find(findCondition);
        } catch (e) {
            console.error(`RoleService.findOne ex ${e}`);
            throw Error(e.message);
        }
    }

    async create(body) {
        try {
            const isRoleExists = await roleModel.findOne({name: body.name})
            console.log(isRoleExists);
            if (!isRoleExists) {

                const role = new roleModel({
                    name: body.name,
                    rights: body.rights
                });

                const saved = await role.save();
                console.log('saved', saved);
            } else {
                throw Error('Role has already been created');
            }
        } catch (e) {
            console.error(`RoleService.create ex ${e}`);
            throw Error(e);
        }
    }
}

export default RoleService;
