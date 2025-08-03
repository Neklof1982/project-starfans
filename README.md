# StarFanS  

**StarFanS** es una página web moderna, responsive e intuitiva diseñada para captar y gestionar usuarios que desean unirse a una comunidad de seguidores.  

Combina una experiencia de usuario cuidada con validaciones inteligentes y retroalimentación visual interactiva, todo pensado para asegurar registros seguros y suscripciones efectivas desde cualquier dispositivo.

La plataforma ofrece:

- Un **formulario de registro completo** con validación personalizada.
- Un **formulario de suscripción rápida** para captación de emails.
- Feedback visual e interactivo con **SweetAlert2**.
- Envío simulado de datos en formato **JSON** para futura integración con back-end.
- Comprobaciones de edad, formato de correo y aceptación de políticas.

---

## Características principales 🚀

- **Registro con validación**:  
  - Verificación de campos obligatorios, formato de email y teléfono, coincidencia de contraseñas.
  - Validación de edad mínima (18 años).
  - Verificación de aceptación de política de privacidad.

- **Formulario de suscripción**:  
  - Comprobación del formato de email.
  - Confirmación antes de enviar.
  - Simulación de envío a servidor (muestra el objeto JSON generado).

- **Feedback visual con SweetAlert2**:  
  - Alertas informativas y de error adaptadas a cada caso.

---

## Tecnologías utilizadas 🛠️

- **HTML5** – Estructura semántica.
- **CSS3 (Responsive)** – Adaptación a escritorio, tablet y móvil.
- **JavaScript (Vanilla)** – Validaciones de formularios, eventos y lógica de envío.
- **SweetAlert2** – Para mostrar mensajes interactivos al usuario.
- **JSON.stringify** – Generación del cuerpo del mensaje simulado al servidor.

---

## Validaciones del Registro 🧾

1. Todos los campos obligatorios deben completarse.
2. Las contraseñas deben coincidir.
3. El email debe tener un formato válido.
4. El teléfono debe ser español (empieza por 6, 7 o 9).
5. El usuario debe ser mayor de 18 años.
6. Debe aceptarse la política de privacidad.

---

## Validaciones de la Suscripción 📬

- Se verifica que el campo de email no esté vacío.
- El email debe cumplir el formato correcto.
- Se genera un objeto JSON con el email y se muestra antes de simular el envío.

---

## Archivos principales 📁

- `registro.html` – Página de registro como fan.
- `login.html` – Página de acceso para usuarios registrados.
- `validarFormulario.js` – Lógica de validación del formulario de registro.
- `validarSub.js` – Lógica de validación del formulario de suscripción.
- `stylesFormulario.css` – Estilos específicos del módulo StarFanS.

---

## Cómo probarlo ⚙️

1. Accede a la sección de registro desde la navegación.
2. Prueba enviar el formulario vacío: se mostrarán errores personalizados.
3. Completa todos los campos correctamente y acepta la política.
4. Al confirmar el envío, se mostrará el JSON generado.
5. En la suscripción, intenta con emails inválidos y luego válidos.
6. Todos los mensajes se mostrarán mediante SweetAlert2.

---

## Versionado 📌
Este proyecto se ha utilizando **Git** y **GitHub** para el control de versiones, lo que permite mantener un registro detallado de los cambios realizados durante el desarrollo. 

---

## Deploy 🌐
Este proyecto está desplegado en **GitHub Pages**, lo que permite acceder al sitio directamente desde el repositorio.

🔗 [Ver sitio en producción]([https://neklof1982.github.io/Project-StarFanS/])

---

## Licencia 📄
Este proyecto está bajo la **MIT License**.

---
## Expresiones de Gratitud 🎁

📢Podéis invitarme a una cerveza 🍺 o un café ☕.\
Gracias por la Lectura 🤓.
