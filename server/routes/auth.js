import express from 'express';
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    res.json({ success: true, token: 'dummy-token' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

export default router;