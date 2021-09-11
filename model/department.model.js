import mongoose from 'mongoose';

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    surveys: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Survey',
        default: []
    },
}, {
    timestamps: true
});

export const departmentModel = mongoose.model('Department', DepartmentSchema);