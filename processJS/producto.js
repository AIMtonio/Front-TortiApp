document.addEventListener('DOMContentLoaded', function() {
    function cargarProductos() {
        fetch('https://tortiapp.onrender.com/api/Producto')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#productos-table tbody');
                tableBody.innerHTML = '';

                const productos = data[0];

                productos.forEach(producto => {
                    const row = `
                        <tr>
                            <td>${producto.idProducto}</td>
                            <td>${producto.nombreP}</td>
                            <td>${producto.precioP}</td>
                            <td>${producto.stockP}</td>
                        </tr>
                    `;
                    tableBody.insertAdjacentHTML('beforeend', row);
                });
            })
            .catch(error => {
                console.error('Error al cargar productos:', error);
            });
    }

    cargarProductos();
});