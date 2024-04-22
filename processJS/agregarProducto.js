document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('agregar-producto-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const stock = document.getElementById('stock').value;

        const data = {
            nombreP: nombre,
            precioP: parseFloat(precio),
            stockP: parseInt(stock)
        };

        fetch('https://tortiapp.onrender.com/api/Producto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Producto agregado exitosamente:', result);
            alert('Producto agregado exitosamente');
            // Puedes redirigir a otra página o realizar otras acciones después de agregar el producto
        })
        .catch(error => {
            console.error('Error al agregar producto:', error);
            alert('Error al agregar producto');
        });
    });
});