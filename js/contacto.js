 //CONTACTOS

    // Obtenemos los elementos del DOM
    const contactForm = document.getElementById('contact-form');
    const contactsTable = document.getElementById('contacts-table').getElementsByTagName('tbody')[0];
    
    // Manejar el evento de enviar el formulario
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que se recargue la página
    
        // Obtener los valores de los campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
    
        // Crear una nueva fila y añadirla a la tabla
        const newRow = contactsTable.insertRow();
    
        // Insertar las celdas
        const nameCell = newRow.insertCell(0);
        const emailCell = newRow.insertCell(1);
        const phoneCell = newRow.insertCell(2);
        const actionsCell = newRow.insertCell(3);
    
        // Asignar los valores a las celdas
        nameCell.textContent = name;
        emailCell.textContent = email;
        phoneCell.textContent = phone;
    
        // Crear botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'delete-btn';
        actionsCell.appendChild(deleteButton);
    
        // Añadir evento de eliminación al botón
        deleteButton.addEventListener('click', function() {
            contactsTable.deleteRow(newRow.rowIndex - 1);
        });
    
        // Limpiar los campos del formulario
        contactForm.reset();
    });