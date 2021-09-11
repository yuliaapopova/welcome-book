import express from 'express';
import authRouter from './auth.router.js';

const router = express.Router();

router.use('/api/auth', authRouter);
router.get('/', (req, res) => {
    res.json({success: 'ok'});
})

export default router;

