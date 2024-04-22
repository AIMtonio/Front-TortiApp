document.addEventListener('DOMContentLoaded', function() {
    function cargarClientes() {
        fetch('https://tortiapp.onrender.com/api/Cliente')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#clientes-table tbody');
                tableBody.innerHTML = '';

                const clientes = data[0];

                clientes.forEach(cliente => {
                    const row = `
                        <tr>
                            <td>${cliente.idCliente}</td>
                            <td>${cliente.nombreC}</td>
                            <td>${cliente.apellido}</td>
                            <td>${cliente.deuda}</td>
                            <td>${cliente.idEmpleado}</td>
                        </tr>
                    `;
                    tableBody.insertAdjacentHTML('beforeend', row);
                });
            })
            .catch(error => {
                console.error('Error al cargar clientes:', error);
            });
    }

    cargarClientes();
}); 
