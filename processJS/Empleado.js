document.addEventListener('DOMContentLoaded', function() {
    function cargarEmpleado() {
        fetch('https://tortiapp.onrender.com/api/Empleados')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#productos-table tbody');
                tableBody.innerHTML = '';

                const empleados = data[0];

                empleados.forEach(empleados => {
                    const row = `
                        <tr>
                            <td>${empleados.idEmpleado}</td>
                            <td>${ empleados.nombreE}</td>
                            <td>${empleados.apellidoE}</td>
                            <td>${empleados.apellidoEMaterno}</td>
                            <td>${empleados.numerocelE}</td>

                        </tr>
                    `;
                    tableBody.insertAdjacentHTML('beforeend', row);
                });
            })
            .catch(error => {
                console.error('Error al cargar productos:', error);
            });
    }

    cargarEmpleado();
});