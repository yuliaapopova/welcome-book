import mongoose from 'mongoose';

const AnswerSchema = new mongoose.Schema({
    survey: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Survey', required: true
    },
    answers: [String],
    rating: {
        type: Number,
        min: 1,
        max: 100
    },
    feedback: String
    // time:
}, {
    timestamps: true
});

export const answerModel = mongoose.model('Answer', AnswerSchema);