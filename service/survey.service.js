import {departmentModel} from "../model/department.model.js";
import {surveyModel} from "../model/survey.model.js";
import {roleModel} from "../model/role.model.js";
import {answerModel} from "../model/answer.model.js";

class SurveyService {
    constructor() {
        this.findOne = this.findOne.bind(this);
        this.find = this.find.bind(this);
        this.create = this.create.bind(this);
    }

    async findOne(id) {
        try {
            return await surveyModel.findById(id).exec();
        } catch (e) {
            console.error(`SurveyService.findOne ex ${e}`);
            throw Error(e);
        }
    }

    async find(findCondition) {
        try {
            return await surveyModel.find(findCondition);
        } catch (e) {
            console.error(`SurveyService.find ex ${e}`);
            throw Error(e.message);
        }
    }

    async create(body) {
        try {
            const role = await roleModel.findById(body.roleId).exec();

            const survey = new surveyModel({
                name: body.name,
                role: role,
                questions: body.questions
            });

            const saved = await survey.save();

            await departmentModel.findByIdAndUpdate({
                _id: body.departmentId
            }, {
                $push: {
                    surveys: saved._id
                }
            }).exec();

            console.log('saved', saved);
        } catch (e) {
            console.error(`SurveyService.create ex ${e}`);
            throw Error(e);
        }
    }

}

export default SurveyService;
