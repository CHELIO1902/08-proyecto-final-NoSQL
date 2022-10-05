import { User } from '../models/index.js'

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.json({
            msg: "User created successfully",
            user,
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error creating user",
            error,
        });
    }
};

const getAll = async (_, res) => {
    try {
        const users = await User.find();
        return res.json({
            msg: "All users found",
            users,
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error getting all users",
            error,
        });
    }
};

export { createUser, getAll };