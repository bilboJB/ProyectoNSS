const pool = require('../db')

const darHora =  async(req,res) => {
    const result = await pool.query('SELECT NOW()');
    console.log(result);
    res.json(result.rows[0].now);
}

const insertarUsuario = async(req,res,next) =>{
    const { id_usuario, nombre, apellido, correo, telefono, fecha_nacimiento, genero} = req.body;

    try {
        const result = await pool.query('INSERT INTO public."Usuario"( id_usuario, nombre, apellido, correo, telefono, fecha_nacimiento, genero) VALUES ($1, $2, $3, $4, $5, $6, $7);',[
            id_usuario, 
            nombre, 
            apellido, 
            correo, telefono, 
            fecha_nacimiento, 
            genero
        ]);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    darHora,
    insertarUsuario
}