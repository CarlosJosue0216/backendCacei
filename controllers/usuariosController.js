import pool from '../config/bd.js';
import User from '../models/usuarios.js';

export async function autenticar(req, res) {
    const { nombre, numControl } = req.body;
    const user = await User.findByName(nombre);
    if (!user) {
      return res.status(404).json({ msg: 'Usuario no existe' });
    }
    if (user.numControl !== numControl) {
      return res.status(404).json({ msg: 'num de control incorrecto' });
    }else{
      return res.json({ msg: 'Login exitoso' });
    }
  }
