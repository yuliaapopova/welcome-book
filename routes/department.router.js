import express from 'express';
import { departmentController } from '../controller/department.controller.js'

const router = express.Router();

router.get('/:departmentId', departmentController.getById);
router.get('/', departmentController.getAll);
router.post('/', departmentController.create);
router.delete('/:departmentId', departmentController.delete);

export default router;
