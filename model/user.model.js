import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role', required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department', required: true
    },
    answers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Answer'
    },
}, {
    timestamps: true
});

export const userModel = mongoose.model('User', UserSchema);