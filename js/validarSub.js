document.getElementById("miFormulario").addEventListener("submit", function(event) {
    /* Evita que el formulario se envíe automáticamente */
    event.preventDefault(); 

    /* Campo */
    var email = document.getElementById("email").value.trim();

    /* E-mail escrito correctamente */
    if (email === "" ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingresa tu correo electrónico.'
        });
        return; // Detiene el envío del formulario si el correo electrónico está vacío
    }

    // Validación de formato de correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Introduce una dirección de correo electrónico válida.'
        });
        return;
    }

    /* Registrar */
    Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Quieres enviar la suscripción?',
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
                        title: "¡Felicidades, te has suscrito!",
                        showConfirmButton: false,
                        timer: 1500
                });
            ;
            return;
        }    
        });
    }});

    // Construir el objeto JavaScript (JS)
    var formDataMail = {
        email: email,
    };

    // Comprobación del JavaScript (JS) generado
    console.log(formDataMail); // Muestra el objeto JSON en la consola del navegador

    var stringJSON = JSON.stringify(formDataMail);
    /*alert(formDataMail);*/
});