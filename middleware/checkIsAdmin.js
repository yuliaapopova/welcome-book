import {roleModel} from "../model/role.model.js";

export default (role) => async (req, res, next) => {
    const user = await req.user;
    const roleExists = await roleModel.findById(user.role).exec();
    const hastRole = role === roleExists?.name;
    // const hastRole = roles.find(role => role.name === role)
    if (!hastRole) {
        res.status(401).json('Access is denied');
    }

    return next();
}