import AnswerService from '../service/answers.service.js'

class AnswerController {
    constructor() {
        this.answerService = AnswerService;
        this.answerService = this.answerService.bind(this);
        this.find = this.find.bind(this);
        this.findOne = this.findOne.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.updateMentor = this.updateMentor.bind(this);
    }

    async findOne(req, res) {
        try {
            const answerService = new this.answerService();
            console.log('AnswerController.find params', req.params.answerId)
            const answer = await answerService.findOne(req.params.answerId);
            return res.json({ answer });
        } catch (e) {
            console.error(`AnswerController.find ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

    async find(req, res) {
        try {
            const answerService = new this.answerService();
            const answer = await answerService.find(req.body);
            return res.status(200).json({ answer });
        } catch (e) {
            console.error(`AnswerController.find ex ${e.message}`);
            return res.status(400).json({ error: e.message });
        }
    }

    async create(req, res) {
        try {
            const answerService = new this.answerService();
            const answer = await answerService.create(req.params.userId, req.params.surveyId, req.body);
            return res.json({ answer });
        } catch (e) {
            console.error(`AnswerController.create ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

    async update(req, res) {
        try {
            const answerService = new this.answerService();
            console.log('AnswerController.update body', req.body)
            const answer = await answerService.update(req.params.answerId, req.body);
            return res.json({ answer });
        } catch (e) {
            console.error(`AnswerController.update ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

    async updateMentor(req, res) {
        try {
            const answerService = new this.answerService();
            console.log('AnswerController.updateMentor body', req.body)
            const answer = await answerService.update({id: req.params.userId, body: req.body});
            return res.json({ answer });
        } catch (e) {
            console.error(`AnswerController.updateMentor ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }
}


export const answerController = new AnswerController();
