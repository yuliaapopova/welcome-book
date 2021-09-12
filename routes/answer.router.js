import express from 'express';
import passport from 'passport'
import {answerController} from "../controller/answer.controller.js";
import checkAdmin from "../middleware/checkIsAdmin.js";

const router = express.Router();

router.get('/:userId/:answerId', answerController.findOne);
router.get('/', answerController.find);
router.post('/:userId/:surveyId', answerController.create);
router.put('/:answerId', answerController.update);
router.put('/:answerId/mentor',
    passport.authenticate('jwt', { session: false }),
    checkAdmin('Mentor'),
    answerController.update
);

export default router;
