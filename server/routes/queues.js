import express from 'express';
import Queue from '../models/Queue.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const queue = new Queue({ name: req.body.name });
  await queue.save();
  res.json(queue);
});

router.post('/:id/token', async (req, res) => {
  const queue = await Queue.findById(req.params.id);
  queue.tokens.push({ name: req.body.name });
  await queue.save();
  res.json(queue);
});

router.put('/:id/tokens/:tokenIndex/move', async (req, res) => {
  const { direction } = req.body;
  const queue = await Queue.findById(req.params.id);
  const index = parseInt(req.params.tokenIndex);
  const newIndex = direction === 'up' ? index - 1 : index + 1;
  const tokens = queue.tokens;
  [tokens[index], tokens[newIndex]] = [tokens[newIndex], tokens[index]];
  queue.tokens = tokens;
  await queue.save();
  res.json(queue);
});

router.put('/:id/assign', async (req, res) => {
  const queue = await Queue.findById(req.params.id);
  if (queue.tokens.length > 0) {
    queue.tokens[0].assigned = true;
    await queue.save();
  }
  res.json(queue);
});

router.delete('/:id/token/:tokenIndex', async (req, res) => {
  const queue = await Queue.findById(req.params.id);
  queue.tokens.splice(req.params.tokenIndex, 1);
  await queue.save();
  res.json(queue);
});

router.get('/', async (req, res) => {
  const queues = await Queue.find();
  res.json(queues);
});

export default router;