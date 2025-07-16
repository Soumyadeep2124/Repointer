const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  lastName: {
    type: String,
    minLength: 3,
    maxLength: 20,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    immutable: true,
  },
  age: {
    type: Number,
    min: 6,
    max: 80,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: true,
  },
  problemSolved:{
        type:[{
            type:Schema.Types.ObjectId,
            ref:'problem',
            unique:true
        }],
  },
  coursesCompleted: {
    type: Number,
    default: 0,
  },
  streak: {
    type: Number,
    default: 0,
  },
  lastProblemSolvedAt: {
    type: Date,
  },
  dailyProgress: [
    {
      date: String, // format: 'YYYY-MM-DD'
      count: Number,
    }
  ],
  monthlyProgress: [
    {
      weekStartDate: String,
      totalSolved: Number,
    }
  ],
}, {
  timestamps: true,
});


userSchema.post('findOneAndDelete', async function (userInfo) {
    if (userInfo) {
      await mongoose.model('submission').deleteMany({ userId: userInfo._id });
    }
});


const User = mongoose.model("user",userSchema);

module.exports = User;
