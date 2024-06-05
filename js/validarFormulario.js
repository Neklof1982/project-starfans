/* Desmarcar "campoRango" y Politica Privacidad */
/* información de https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event */

window.addEventListener('load', function() {
    /* Borrar el contenido del campoRango */
    document.getElementById('campoRango').value = '';
    
    /* Desmarcar el checkbox de política */
    document.getElementById('politica').checked = false;
});

/*Validación JavaScript*/

document.getElementById("registro").addEventListener("submit", function(event) {
    /* Evita que el formulario se envíe automáticamente */
    event.preventDefault();

    /* Campos */
    var usuario = document.getElementById("campoUsuario").value.trim();
    var pass = document.getElementById("campoPass").value.trim();
    var pass2 = document.getElementById("campoPass2").value.trim();
    var nombre = document.getElementById("campoNombre").value.trim();
    var apellidos = document.getElementById("campoApellidos").value.trim();
    var email = document.getElementById("campoEmail").value.trim();
    var telefono = document.getElementById("campoTelf").value.trim();
    var fechaNacimiento = document.getElementById("campoFN").value.trim();
    var politica = document.getElementById("politica").checked;

    /* Validación de campos obligatorios * (Duda, individual o colectiva) */
    if (usuario === "" || pass === "" || nombre === "" || apellidos === "" || email === "" || telefono === "" || fechaNacimiento === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, completa todos los campos obligatorios.'
        });
        return;
    }

    /* Validación de contraseña */
    if (pass !== pass2) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las contraseñas no coinciden.'
        });
        return;
    }

    /* E-mail escrito correctamente */
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Introduce una dirección de correo electrónico válida.'
        });
        return;
    }

    /* Números de teléfono españoles */
    var telefonoRegex = /^[679]{1}[0-9]{8}$/;
    if (!telefonoRegex.test(telefono)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Introduce un número de teléfono móvil español válido.'
        });
        return;
    }

    /* Mayor de 18 años */
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var edad = new Date().getFullYear() - fechaNacimientoDate.getFullYear();
    if (edad < 18) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ser mayor de 18 años para registrarte.'
        });
        return;
    }
    /*Sale marcar política de privacidad */
    if (!politica) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes aceptar la política de privacidad para registrarte.'
        });
        return; 
    }

    /* Registrar */
    Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Quieres enviar el formulario?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, enviar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon:'info',
                title: "El JSON que se va enviar al Back-End es:",
                text:  stringJSON,
                type: "info",
                confirmButtonText: "Enviar"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "¡Felicidades, te has registado!",
                        showConfirmButton: false,
                        timer: 1500
                });
            ;
            return;
        }    
        });
    }});
    // Construir el objeto JavaScript (JS)
    var formData = {
        usuario: usuario,
        pass: pass,
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        telefono: telefono,
        fechaNacimiento: fechaNacimiento,
        politica: politica
    };

    // Comprobación del JavaScript (JS) generado
    console.log(formData); // Muestra el objeto JSON en la consola del navegador

    var stringJSON = JSON.stringify(formData);

});