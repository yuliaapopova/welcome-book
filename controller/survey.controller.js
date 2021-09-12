import SurveyService from '../service/survey.service.js'

class SurveyController {
    constructor() {
        this.surveyService = SurveyService;
        this.surveyService = this.surveyService.bind(this);
        this.find = this.find.bind(this);
        this.findOne = this.findOne.bind(this);
        this.create = this.create.bind(this);
        this.findByDepartment = this.findByDepartment.bind(this);
        this.findByDepartmentAndRole = this.findByDepartmentAndRole.bind(this);
    }

    async findOne(req, res) {
        try {
            const surveyService = new this.surveyService();
            console.log('SurveyController.findOne params', req.params.surveyId)
            const survey = await surveyService.findOne(req.params.surveyId);
            return res.json({ survey });
        } catch (e) {
            console.error(`SurveyController.findOne ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

    async find(req, res) {
        try {
            const surveyService = new this.surveyService();
            const survey = await surveyService.find(req.body);
            return res.json({ survey });
        } catch (e) {
            console.error(`SurveyController.find ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

    async create(req, res) {
        try {
            const surveyService = new this.surveyService();
            const survey = await surveyService.create(req.body);
            return res.json({ survey });
        } catch (e) {
            console.error(`SurveyController.create ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

    async findByDepartment(req, res) {
        try {
            const surveyService = new this.surveyService();
            const survey = await surveyService.find({department: req.params.departmentId});
            return res.json({ survey });
        } catch (e) {
            console.error(`SurveyController.findByDepartment ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

    async findByDepartmentAndRole(req, res) {
        try {
            const surveyService = new this.surveyService();
            const survey = await surveyService.find({
                department: req.params.departmentId,
                role: req.params.role
            });
            return res.json({ survey });
        } catch (e) {
            console.error(`SurveyController.findByDepartmentAndRole ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }
}


export const surveyController = new SurveyController();
