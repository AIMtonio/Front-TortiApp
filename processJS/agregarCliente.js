document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('agregar-cliente-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombreCliente = document.getElementById('nombreC').value;
        const apellidoCliente = document.getElementById('apellido').value;
        const deudaCliente = document.getElementById('deuda').value;
        const idEmpleado = document.getElementById('idEmpleado').value;

        const data = {
            nombreC: nombreCliente,
            apellido: apellidoCliente,
            deuda: deudaCliente,
            idEmpleado: idEmpleado
        };

        fetch('https://tortiapp.onrender.com/api/Cliente', {
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
                throw new Error('Error al agregar cliente');
            }
        })
        .then(result => {
            console.log('Cliente agregado exitosamente:', result);
            alert('Cliente agregado exitosamente');
            // Puedes redirigir a otra página o realizar otras acciones después de agregar el cliente
        })
        .catch(error => {
            console.error('Error al agregar cliente:', error);
            alert('Error al agregar cliente');
        });
    });
});
