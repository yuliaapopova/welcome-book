import express from 'express';
import passport from 'passport'
import { departmentController } from '../controller/department.controller.js'
import checkAdmin from "../middleware/checkIsAdmin.js";

const router = express.Router();

router.get('/:departmentId', departmentController.getById);
router.get('/', departmentController.getAll);
router.post('/', departmentController.create);
router.delete('/:departmentId',
    passport.authenticate('jwt', { session: false }),
    checkAdmin('Mentor'),
    departmentController.delete
);

export default router;
