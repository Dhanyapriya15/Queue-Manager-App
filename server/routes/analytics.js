import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ waitTimes: [2, 4, 6], queueLengths: [1, 2, 3] });
});

export default router;