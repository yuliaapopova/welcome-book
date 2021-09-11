import express from 'express';
import {userController} from "../controller/user.controller.js";

const router = express.Router();

router.get('/:userId', userController.findOne);
router.get('/', userController.find);
router.get('/:userId/subordinates', userController.getSubordinates);
router.post('/', userController.create);

export default router;
