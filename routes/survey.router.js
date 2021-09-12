import express from 'express';
import {surveyController} from "../controller/survey.controller.js";

const router = express.Router();

router.get('/:surveyId', surveyController.findOne);
router.get('/', surveyController.find);
router.get('/departmentId', surveyController.findByDepartment);
router.get('/:departmentId/:roleId', surveyController.findByDepartmentAndRole);
router.post('/', surveyController.create);

export default router;
