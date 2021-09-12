import UserService from '../service/user.service.js'

class UserController {
    constructor() {
        this.userService = UserService;
        this.userService = this.userService.bind(this);
        this.find = this.find.bind(this);
        this.findOne = this.findOne.bind(this);
        this.getSubordinates = this.getSubordinates.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.addSubordinates = this.addSubordinates.bind(this);
    }

    async findOne(req, res) {
        try {
            const userService = new this.userService();
            console.log('UserController.find params', req.params.userId)
            const user = await userService.findOne(req.params.userId);
            return res.json({ user });
        } catch (e) {
            console.error(`UserController.find ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

    async find(req, res) {
        try {
            const userService = new this.userService();
            const user = await userService.find();
            return res.status(200).json({ user });
        } catch (e) {
            console.error(`UserController.find ex ${e.message}`);
            return res.status(400).json({ error: e.message });
        }
    }

    async getSubordinates(req, res) {
        try {
            const userService = new this.userService();
            console.log('UserController.getSubordinates params', req.params.userId)
            const user = await userService.getSubordinates(req.params.userId);
            return res.json({ user });
        } catch (e) {
            console.error(`UserController.getSubordinates ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

    async create(req, res) {
        try {
            const userService = new this.userService();
            const user = await userService.create(req.body);
            return res.json({ user });
        } catch (e) {
            console.error(`UserController.create ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

    async update(req, res) {
        try {
            const userService = new this.userService();
            console.log('UserController.update body', req.body)
            const user = await userService.update({id: req.params.userId, body: req.body});
            return res.json({ user });
        } catch (e) {
            console.error(`UserController.update ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

    async addSubordinates(req, res) {
        try {
            const userService = new this.userService();
            console.log('UserController.addSubordinates body', req.body)
            const user = await userService.addSubordinates(req.params.userId, req.body);
            return res.json({ user });
        } catch (e) {
            console.error(`UserController.addSubordinates ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }
}


export const userController = new UserController();
