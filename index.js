const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

//datos
// (userfile) para crear la carpeta 
const userFile='mascotas.json'; 
const ordersFile='ordenes.json';

function readData(file) {
  try {
     if (!fs.existsSync(file)) return [];
      return JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch(error) { 
      console.error(`Error al leer el archivo ${file}:`, error); 
      return [];
    }
}

function saveData(file, data) {
 
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    




  };

const mascotas = readData(userFile);
const ordenes = readData(ordersFile);



//CRUD
// app.post('/usuarios', (req, res) => {
//   const usuario ={ id: usuarios.length +1, ...req.body };
//   usuarios.push(usuario);
//   saveData(userFile, usuarios);
//   res.status(201).json(usuario);
 
// });
app.post('/Formulario', (req, res) => {
  const nuevoId = mascotas.length > 0 
  ? Math.max(...mascotas.map(u => u.id)) + 1
  : 1;
  const mascota ={ id: nuevoId, ...req.body };
  mascotas.push(mascota);
  saveData(userFile, mascotas);
  res.status(201).json(mascota);
 
});

app.get('/usuarios', (req, res) => {    
  res.json(mascotas);
});

// // OBTENER USUARIO POR ID

// app.get('/usuarios/:id', (req, res) => {
//   const usuario = usuarios.find(u => u.id ==req.params.id);
//   if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
//   res.json(usuario);
//   }); 

// // Actualizar usuario

// app.put('/usuarios/:id', (req, res) => {
//   const index = usuarios.findIndex(u => u.id == req.params.id);
//   if (index <0) return res.status(404).json({ error: 'Usuario no encontrado' });
//   usuarios[index] = { id: usuarios[index].id, ...req.body };
//   saveData(userFile, usuarios);
//   res.json(usuarios[index]);
//   });

// // Eliminar usuario

// app.delete('/usuarios/:id', (req, res) => {
//   const index = usuarios.findIndex(u => u.id == req.params.id); 
//   if (index <0) return res.status(404).json({ error: 'Usuario no encontrado' });
//   usuarios.splice(index, 1);
//   saveData(userFile, usuarios);
//   res.status(204).end( );
//   });










app.listen(port, () => {
    console.log(`Servidor ejecutadose en http://localhost:${port}`);
    });