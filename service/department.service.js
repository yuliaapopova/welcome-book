import { departmentModel } from '../model/department.model.js'

class DepartmentService {
    constructor() {
        this.getById = this.getById.bind(this);
        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
    }

    async getById(id) {
        try {
            return await departmentModel.findById(id).exec();
        } catch (e) {
            console.error(`DepartmentService.getById ex ${e}`);
            throw Error(e);
        }
    }

    async getAll() {
        try {
            return await departmentModel.find({})
        } catch (e) {
            console.error(`DepartmentService.getAll ex ${e}`);
            throw Error(e);
        }
    }

    async create(body) {
        try {
            const department = new departmentModel({
                name: body.name
            })
            const saved = await department.save();
            console.log('saved', saved);
        } catch (e) {
            console.error(`DepartmentService.create ex ${e}`);
            throw Error(e);
        }
    }

    async delete(id) {
        try {
            await departmentModel.findByIdAndDelete(id)
        } catch (e) {
            console.error(`CityService.delete ex ${e}`);
            throw Error(e);
        }
    }
}

export default DepartmentService;