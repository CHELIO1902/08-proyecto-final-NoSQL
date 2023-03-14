import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      date {
        type: Date,
        default: Date.now,
        required: true
      },
      totalSale: {
        type: Number,
        default: 0
      }
})

export default mongoose.model('Sales', salesSchema);