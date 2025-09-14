function cargarUsuarios() {
  fetch('http://localhost:3000/mascotas')
    .then(respuesta => respuesta.json())
    .then(mascotas => {
      const lista = document.getElementById('usuarios-lista');
      lista.innerHTML = '';
      mascotas.forEach(usuario => {
        const item = document.createElement('li');
        item.className = "list-group-item";
        item.textContent = `ID: ${usuario.id}-Mascota: ${usuario.mascota} - Nombre: ${usuario.nombre}-Raza: ${usuario.raza} - Edad: ${usuario.edad} - Genero: ${usuario.genero}`;
        lista.appendChild(item);
      });
    })
    .catch(error => {
      console.error('Error consultando usuarios:', error);
    });
}

// Cargar la lista de usuarios al iniciar
document.addEventListener("DOMContentLoaded", cargarUsuarios);
