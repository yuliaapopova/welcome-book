import mongoose from 'mongoose';

const SurveySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    questions: [String],
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role', required: true
    },
}, {
    timestamps: true
});

export const surveyModel = mongoose.model('Survey', SurveySchema);