import RoleService from '../service/role.service.js'

class RoleController {
    constructor() {
        this.roleService = RoleService;
        this.roleService = this.roleService.bind(this);
        this.find = this.find.bind(this);
        this.findOne = this.findOne.bind(this);
        this.create = this.create.bind(this);
    }

    async findOne(req, res) {
        try {
            const roleService = new this.roleService();
            console.log('roleController.findOne params', req.params.roleId)
            const role = await roleService.findOne(req.params.roleId);
            return res.json({ role });
        } catch (e) {
            console.error(`RoleController.find ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

    async find(req, res) {
        try {
            const roleService = new this.roleService();
            const role = await roleService.find();
            return res.json({ role });
        } catch (e) {
            console.error(`RoleController.find ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

    async create(req, res) {
        try {
            const roleService = new this.roleService();
            const roe = await roleService.create(req.body);
            return res.json({ role });
        } catch (e) {
            console.error(`RoleController.create ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }
}


export const roleController = new RoleController();
