document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginform');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const correo = document.getElementById('correo').value;
        const numerocel = document.getElementById('numerocel').value;
        const contrasena = document.getElementById('contrasena').value;

        const data = {
            nombreU: nombre,
            apellidoU: apellido,
            correoU: correo,
            numerocelU: numerocel,
            contrasenaU: contrasena,
            sesionActiva: false // Asumiendo que la sesión no está activa al agregar el usuario
        };

        fetch('https://tortiapp.onrender.com/api/Usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('No se pudo agregar el usuario');
            }
        })
        .then(result => {
            console.log('Usuario agregado exitosamente:', result);
            alert('Usuario agregado exitosamente');
            // Puedes redirigir a otra página o realizar otras acciones después de agregar el usuario
        })
        .catch(error => {
            console.error('Error al agregar usuario:', error);
            alert('Error al agregar usuario');
        });
    });
});
