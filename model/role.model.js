import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    rights: {type: String, required: true},
}, {
    timestamps: true
});

export const roleModel = mongoose.model('Role', RoleSchema);