import express from 'express';
import passport from 'passport'
import {userController} from "../controller/user.controller.js";
import checkAdmin from "../middleware/checkIsAdmin.js";

const router = express.Router();

router.get('/:userId', userController.findOne);
router.get('/',
    passport.authenticate('jwt', { session: false }),
    checkAdmin('Mentor'),
    userController.find
);
router.get('/:userId/subordinates', userController.getSubordinates);
router.post('/', userController.create);
router.put('/:userId/subordinates', userController.addSubordinates)
router.put('/:userId', userController.update);

export default router;
