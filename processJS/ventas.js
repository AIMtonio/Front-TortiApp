document.addEventListener('DOMContentLoaded', function() {
    function cargarVentas() {
        fetch('https://tortiapp.onrender.com/api/Empleados')
        .then(response => response.json())
        .then(data=>{
            const tableBody= document.querySelector('#empleado-table tbody');
            tableBody.innerHTML = '';
            const empleado = data[0];

            empleado.forEach( empleados =>{
                empleadoMap[empleado.idEmpleado]= empleado.nombreE
            })
        })
        fetch('https://tortiapp.onrender.com/api/Venta')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#ventas-table tbody');
                tableBody.innerHTML = '';

                const ventas = data[0];

                ventas.forEach(venta => {
                    const row = `
                        <tr>
                            <td>${venta.idVenta}</td>
                            <td>${venta.idEmpleado}</td>
                            <td>${venta.idProducto}</td>
                            <td>${venta.precioVenta}</td>
                            <td>${venta.cantidadVenta}</td>
                            <td>${venta.fechadeVenta}</td>
                        </tr>
                    `;
                    tableBody.insertAdjacentHTML('beforeend', row);
                });
            })
            .catch(error => {
                console.error('Error al cargar ventas:', error);
            });
    }

    cargarVentas();
});