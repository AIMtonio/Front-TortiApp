document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('agregar-venta-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const idEmpleado = document.getElementById('idEmpleado').value;
        const idProducto = document.getElementById('idProducto').value;
        const precioVenta = document.getElementById('precioVenta').value;
        const cantidadVenta = document.getElementById('cantidadVenta').value;
        const fechaVenta = document.getElementById('fechaVenta').value;

        const data = {
            idEmpleado: parseInt(idEmpleado),
            idProducto: parseInt(idProducto),
            precioVenta: parseFloat(precioVenta),
            cantidadVenta: parseInt(cantidadVenta),
            fechadeVenta: fechaVenta
        };

        fetch('https://tortiapp.onrender.com/api/Venta', {
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
                throw new Error('Error al agregar venta');
            }
        })
        .then(result => {
            console.log('Venta agregada exitosamente:', result);
            alert('Venta agregada exitosamente');
            // Puedes redirigir a otra página o realizar otras acciones después de agregar la venta
        })
        .catch(error => {
            console.error('Error al agregar venta:', error);
            alert('Error al agregar venta');
        });
    });
});