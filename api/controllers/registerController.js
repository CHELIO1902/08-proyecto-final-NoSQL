import { User } from '../models/index.js';
import jwt from 'jwt-simple'
import bcrypt from 'bcrypt';
import config from '../config/index.js';

const register = async (req, res) => {
    try {
         // Encripto contraseña
        const encrypted = await bcrypt.hash(req.body.password, 10)
         // Modifico el body para remplazar el pass con una encriptada
        req.body.password = encrypted
        // Creamos un usuario
        const user = await User.create(req.body);
         // Borramos el password para no mandarla en la respuesta
        user.password = undefined
        //respondemos que el usuario ha sido creado
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

const login = async (req, res) => {
    try {
      //se busca el email para acceder
      const user = await User.findOne({
        email: req.body.email
      })
      //si es diferente mandamos el error
      if (!user) {
        return res.status(401).json({
          msg: 'Credenciales inválidas'
        })
      }
      //comparamos las contraseñas
      const passwordMatched = await bcrypt.compare(
        req.body.password,
        user.password
      )
      //si es diferente mandamos el error
      if (!passwordMatched) {
        return res.status(401).json({
          msg: 'Credenciales inválidas'
        })
      }
      //el payload se usa solo para guardar informacion
      const payload = {
        userId: user.id
      }
      //codificamos el token
      const token = jwt.encode(payload, config.security.tokenSecret)
  
      return res.json({
        msg: 'Login Satisfactorio',
        token
      })
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al hacer login',
        error
      })
    }
  }



export  { register, login };
