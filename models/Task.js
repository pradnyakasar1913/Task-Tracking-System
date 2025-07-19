const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date,
  status: { type: String, default: 'open' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comments: [{ body: String, user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, createdAt: Date }],
  attachments: [String],
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);