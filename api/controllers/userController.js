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

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
      const getUser = await User.findById(id);
      if (!getUser) {
        return res.status(404).json({
          msg: 'User not found',
        });
      }
      return res.json({
        msg: 'User found successfully',
        getUser,
      });
    } catch (error) {
      res.status(500).json({
        msg: 'Error getting user by id',
        error,
      });
    }
  };

  const updateUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const userUpdate = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        return res.json({
            msg: `User ${User.name} updated successfully`,
            userUpdate,
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error updating user',
          });
    }
     
  };

  const deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndRemove(id);
        return res.json({
            msg: 'User deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error deleting user',
        });
    }
  };

export { createUser, getAll, getUserById, updateUserById, deleteUserById };