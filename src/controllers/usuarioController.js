const client = require('../db');  // Importa la instancia del cliente de la base de datos

const usuariosController = {
  async getUsuarios(req, res) {
    try {
      const response = await client.execute("SELECT * FROM Usuarios");
      res.json(response);
    } catch (err) {
      console.error("Error al ejecutar la consulta:", err);
      res.status(500).send("Error interno del servidor");
    }
  },

  async getUsuarioPorNombre(req, res) {
    const nombre = req.params.nombre.replace(/'/g, "''");  // Escapar comillas simples
    // const nombre = 'data';  
    try {
        const query = `SELECT * FROM Usuarios WHERE Nombre = '${nombre}'`;
        const result = await client.execute(query);
        console.log(result);
        if (result.rows && result.rows.length > 0) {
            res.send("OK");
        } else {
            res.status(404).send("Error: Usuario no encontrado");
        }
    } catch (err) {
        console.error("Error al ejecutar la consulta:", err);
        res.status(500).send("Error interno del servidor");
    }

  }
};

module.exports = usuariosController;
