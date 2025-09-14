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




app.post('/Formulario', (req, res) => {
  const nuevoId = mascotas.length > 0 
  ? Math.max(...mascotas.map(u => u.id)) + 1
  : 1;
  const mascota ={ id: nuevoId, ...req.body };
  mascotas.push(mascota);
  saveData(userFile, mascotas);
  res.status(201).json(mascota);
 
});

app.get('/mascotas', (req, res) => {    
  res.json(mascotas);
});






app.listen(port, () => {
    console.log(`Servidor ejecutadose en http://localhost:${port}`);
    });