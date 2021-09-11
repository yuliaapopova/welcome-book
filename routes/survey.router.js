import express from 'express';
import {surveyController} from "../controller/survey.controller.js";

const router = express.Router();

router.get('/:userId', surveyController.findOne);
router.get('/', surveyController.find);
router.get('/departmentId', surveyController.findByDepartment);
router.post('/', surveyController.create);

export default router;
