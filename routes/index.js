import express from 'express';
import authRouter from './auth.router.js';
import departmentRouter from './department.router.js';
import userRouter from './user.router.js';
import roleRouter from './role.router.js';
import surveyRouter from './survey.router.js';
import answerRouter from './answer.router.js'

const router = express.Router();

router.use('/api/auth', authRouter);
router.get('/', (req, res) => {
    res.json({success: 'ok'});
})
router.use('/api/departments', departmentRouter);
router.use('/api/users', userRouter);
router.use('/api/roles', roleRouter);
router.use('/api/survey', surveyRouter);
router.use('/api/answers', answerRouter);

export default router;

