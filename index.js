const express = require('express')
const app = express()

const usuariosRoutes = require('./src/routes/usuarioRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usuariosRoutes);


app.listen(3000, () => {
  console.log('puerto http://localhost:3000')
})
