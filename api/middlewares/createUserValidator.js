import joi from 'joi';

const createUserValidator = async (req, res, next) => {
    try {
        const createUser = joi.object({
            name: joi.string().min(2).max(50).required(),
            lastName: joi.string(),
            phone: joi.string().min(2).max(15).disallow(0),
            email: joi.string().required(),
            password: joi.string().min(6),
            numCard: joi.number().disallow(0),
            address: joi.string().required(),
            role: joi.string().required(),
        });
        await createUser.validateAsync(req.body);
        next();
    } catch (error) {
        res.status(400).json({
            msg: 'Error creating user',
            error,
        });
    }
};

export default createUserValidator;