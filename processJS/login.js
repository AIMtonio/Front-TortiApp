document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginform');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const usuario = document.querySelector('input[name="usuario"]').value;
        const contraseña = document.querySelector('input[name="contraseña"]').value;

        if (!usuario || !contraseña) {
            alert('Por favor ingresa tu usuario y contraseña');
            return;
        }

        fetch('https://tortiapp.onrender.com/api/Usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ usuario, contraseña })
        })
        .then(response => {
            if (response.ok) {
                window.location.href = '../html/Producto';
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        })
        .catch(error => {
            alert('Error al iniciar sesión:', error);
        });
    });
});
