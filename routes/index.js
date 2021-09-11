import express from 'express';
import authRouter from './auth.router.js';
import departmentRouter from './department.router.js';
import userRouter from './user.router.js';
import roleRouter from './role.router.js';

const router = express.Router();

router.use('/api/auth', authRouter);
router.get('/', (req, res) => {
    res.json({success: 'ok'});
})
router.use('/api/departments', departmentRouter);
router.use('/api/users', userRouter);
router.use('/api/role', roleRouter);

export default router;

