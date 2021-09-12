import {surveyModel} from "../model/survey.model.js";
import {answerModel} from "../model/answer.model.js";
import {userModel} from "../model/user.model.js";

class SurveyService {
    constructor() {
        this.findOne = this.findOne.bind(this);
        this.find = this.find.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.updateMentor = this.updateMentor.bind(this);
    }

    async findOne(id) {
        try {
            return await answerModel.findById(id).exec();
        } catch (e) {
            console.error(`SurveyService.findOne ex ${e}`);
            throw Error(e);
        }
    }

    async find(findCondition) {
        try {
            return await answerModel.find(findCondition);
        } catch (e) {
            console.error(`SurveyService.find ex ${e}`);
            throw Error(e.message);
        }
    }

    async create(userId, surveyId, body) {
        try {
            const survey = await surveyModel.findById(surveyId).exec();
            const answer = new answerModel({
                survey: survey,
                answers: body.answers
            });

            const saved = await answer.save();

            await userModel.findByIdAndUpdate({
                _id: userId
            }, {
                $push: {
                    answers: saved._id
                }
            }).exec();

            console.log('saved', saved);
        } catch (e) {
            console.error(`AnswersService.create ex ${e}`);
            throw Error(e);
        }
    }

    async update(id, body) {
        try {
            const {answers} = body;
            const answerUpdate = await this.createCondition({answers});
            return await answerModel.updateOne({id}, {
                $set: answerUpdate
            }).exec();
        } catch (e) {
            console.error(`AnswerService.update ex ${e}`);
            throw Error(e);
        }
    }

    async updateMentor(id, body) {
        try {
            const {rating, feedback} = body;
            const answerUpdate = await this.createCondition({rating, feedback});
            return await answerModel.updateOne({id}, {
                $set: answerUpdate
            }).exec();
        } catch (e) {
            console.error(`AnswerService.updateMentor ex ${e}`);
            throw Error(e);
        }
    }

    async createCondition(body) {
        try {
            const answerUpdate = {};

            if (body.answers) {
                answerUpdate.answers = body.answers;
            }

            if (body.rating) {
                answerUpdate.rating = body.rating;
            }

            if (body.feedback) {
                answerUpdate.feedback = body.feedback;
            }

            return answerUpdate;

        } catch (e) {
            console.error(`AnswerService.createCondition ex ${e}`);
            throw Error(e);
        }
    }
}

export default SurveyService;
