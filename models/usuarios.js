import pool from '../config/bd.js';
const User = {
    async create(nombre,numControl,rol){
        const [result] = await pool.query(
            'INSERT INTO usuarios (nombre, numControl, rol) VALUES (?, ?, ?)',
            [nombre, numControl, rol]
          );
      
          return result.insertId;
    },
    async findByName(nombre) {
        const [result] = await pool.query(
          'SELECT * FROM usuarios WHERE nombre = ?',
          [nombre]
        );
    
        return result.length ? result[0] : null;
      },
      async findUserById(userId) {
        const [rows] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [userId]);
        return rows.length ? rows[0] : null;
      },
      async findAllUsers(){
        const data = await pool.query("Select * from usuarios")
        console.log(data[0])
        return data[0]
      }
}
export default User;