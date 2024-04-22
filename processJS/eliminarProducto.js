document.addEventListener('DOMContentLoaded', function() {

    function eliminarProducto(idProducto) {
        if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
            fetch(`https://tortiapp.onrender.com/api/Producto/${idProducto}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    alert('Producto eliminado correctamente');
                    cargarProductos(); // Recargar la tabla de productos después de eliminar
                } else {
                    throw new Error('No se pudo eliminar el producto');
                }
            })
            .catch(error => {
                console.error('Error al eliminar producto:', error);
                alert('Error al eliminar el producto');
            });
        }
    }
   
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
                            <td><input type="button" onclick="eliminarProducto()" value="Eliminar" /></td>
                        </tr>
                        
                    `;
                    
                    tableBody.insertAdjacentHTML('beforeend', row);
                });
            })
            .catch(error => {
                console.error('Error al cargar productos:', error);
            });
    }


    

    // Cargar productos al cargar la página
    cargarProductos();
});
