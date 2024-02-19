import pool from '../config/bd.js';
import User from '../models/usuarios.js';

export async function autenticar(req, res) {
    const { nombre, numControl } = req.body;
    const user = await User.findByName(nombre);
    if (!user) {
      return res.status(404).json({ msg: 'Usuario no existe' });
    }
    if (user.numControl != numControl) {
      return res.status(404).json({ msg: 'num de control incorrecto' });
    }else{
      return res.json({ msg: 'Login exitoso' });
    }
  }
export async function createUser(req,res){
  const { nombre, numControl,rol } = req.body;
  const byname = await User.findByName(nombre)
  if (byname) {
    return res.status(500).json({ msg: 'Este usuario ya existe' });
  }
  try {
    const user = await User.create(nombre, numControl,rol);
    if (!user) {
      return res.status(500).json({ msg: 'Error en el servidor' });
    }else{
      return res.json({ msg: 'Registrado correctamente' });
    }
    
  }  catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Error en el servidor' });
  }
}