export default function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (token === 'Bearer dummy-token') {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
}