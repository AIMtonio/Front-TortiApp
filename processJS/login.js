document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginform');
    let token = "";

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const usuario = document.querySelector('input[name="usuario"]').value;
        const contraseña = document.querySelector('input[name="contraseña"]').value;

        if (!usuario || !contraseña) {
            alert('Por favor ingresa tu usuario y contraseña');
            return;
        }

        let data = JSON.stringify({ "usuario":usuario, "contraseña": contraseña });

        //Consumo para obtener el token
     fetch('https://back-api-tortiapp.onrender.com/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('usuario_auth' + ':' + 'P%ssword')
        },
        
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta');
        }
        return response.json();
    })
    .then(data => {
        token = data.data;
        return token;
    })
    .catch(error => {
        alert('Error al generar autentificacion:', error);
    });

       setTimeout(() => {
        fetch('https://back-api-tortiapp.onrender.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: data
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    title: "Exito",
                    text: "Inicio de sesión exitoso",
                    icon: "success"
                  });
                window.location.href = '../html/Producto';
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Usuario o contraseña incorrectos",
                    icon: "error"
                  });
            }
        })
        .catch(error => {
            alert('Error al iniciar sesión:', error);
        });
       }, 1000);
    });
});
