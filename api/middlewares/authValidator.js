import jwt from 'jwt-simple';
import config from '../config/index.js';

const authValidator = (req, res, next) => {
    //validamos si nos manda un token
    const token = req.headers.authorization; //token
    if(!token){
        return res.status(401).json({
            msg: 'Autorizhation header not found'
        });
    }

    try {
        //verificamos que el token sea valido
        const { userId } = jwt.decode(token, config.security.tokenSecret);
        req.userId = userId;
        //si el token es valido
        next();
    } catch (error) {
        //si no es valido
        res.status(401).json({
            msg: 'Invalid token',
        });
    }
};

export default authValidator;