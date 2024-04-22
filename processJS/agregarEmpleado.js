document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('agregar-empleado-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellidoPaterno = document.getElementById('apellidoE').value;
        const apellidoMaterno = document.getElementById('apellidoEM').value;
        const numeroCelular = document.getElementById('numeroCel').value;

        const data = {
            nombreE: nombre,
            apellidoE: apellidoPaterno,
            apellidoEMaterno: apellidoMaterno,
            numerocelE: numeroCelular
        };

        fetch('https://tortiapp.onrender.com/api/Empleados', {
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
                throw new Error('Error al agregar empleado');
            }
        })
        .then(result => {
            console.log('Empleado agregado exitosamente:', result);
            alert('Empleado agregado exitosamente');
            // Puedes redirigir a otra página o realizar otras acciones después de agregar el empleado
        })
        .catch(error => {
            console.error('Error al agregar empleado:', error);
            alert('Error al agregar empleado');
        });
    });
});
