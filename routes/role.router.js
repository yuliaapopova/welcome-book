import express from 'express';
import {roleController} from "../controller/role.controller.js";

const router = express.Router();

router.get('/:roleId', roleController.findOne);
router.get('/', roleController.find);
router.post('/', roleController.create);

export default router;
