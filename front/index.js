document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    fetch('http://localhost:3000/Formulario', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(mascota => {
      alert('Usuario creado: ' + mascota.nombre);
        e.target.reset();
    });
  });
});