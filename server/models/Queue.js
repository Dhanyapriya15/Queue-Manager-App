import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now },
  assigned: { type: Boolean, default: false },
});

const QueueSchema = new mongoose.Schema({
  name: String,
  tokens: [TokenSchema],
});

export default mongoose.model('Queue', QueueSchema);