import DepartmentService from "../service/department.service.js";

class DepartmentController {

    constructor(DepartmentService) {
        this.departmentService = DepartmentService;
        this.departmentService = this.departmentService.bind(this);
        this.getById = this.getById.bind(this);
        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
    }

    /**
     * @GET
     * @param {Object} req
     * @param {Object} res
     * @returns { department: DepartmentModel } || { error: string }
     */
    async getById(req, res) {
        try {
            const departmentService = new this.departmentService();
            console.log('DepartmentController.getById params', req.params.departmentId)
            const department = await departmentService.getById(req.params.departmentId);
            return res.json({ department });
        } catch (e) {
            console.error(`DepartmentController.getById ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

    /**
     * @GET
     * @param {Object} req
     * @param {Object} res
     * @returns { departments: [DepartmentModel, ...] } || { error: string }
     */
    async getAll(req, res) {
        try {
            const departmentService = new this.departmentService();
            const departments = await departmentService.getAll();
            return res.json({ departments });
        } catch (e) {
            console.error(`DepartmentController.getAll ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

    /**
     * @POST
     * @param {Object} req
     * @param {Object} res
     * @returns { status: string } || { error: string }
     */
    async create(req, res) {
        try {
            const departmentService = new this.departmentService();
            await departmentService.create(req.body);
            return res.status(201).json({ status: 'OK' });
        } catch (e) {
            console.error(`DepartmentController.create ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }


    /**
     * @DELETE
     * @param {Object} req
     * @param {Object} res
     * @returns { status: string } || { error: string }
     */
    async delete(req, res) {
        try {
            const departmentService = new this.departmentService();
            console.log('params', req.params.departmentId)
            await departmentService.delete(req.params.departmentId);
            return res.json({ status: 'OK' });
        } catch (e) {
            console.error(`DepartmentController.delete ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

}

export const departmentController = new DepartmentController(DepartmentService);