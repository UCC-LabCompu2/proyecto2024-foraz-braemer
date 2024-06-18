let validarFormulario = () => {
    const nombre = document.getElementById('input_nombre').value.trim();
    const apellido = document.getElementById('input_apellido').value.trim();
    const email = document.getElementById('input_email').value.trim();
    const edad = document.getElementById('input_edad').value.trim();
    const sexoM = document.getElementById('sexoM').checked;
    const sexoF = document.getElementById('sexoF').checked;
    const chkRestaurante = document.getElementById('chk_restaurante').checked;
    const chkActividades = document.getElementById('chk_actividades').checked;
    const chkAlojamiento = document.getElementById('chk_alojamiento').checked;

    if (nombre === "" || apellido === "" || email === "" || edad === "" || (!sexoM && !sexoF) || (!chkRestaurante && !chkActividades && !chkAlojamiento)) {
        alert('¡Error! Por favor, complete todos los campos.');
        return false;
    }

    const contieneNumerosNombre = /\d/.test(nombre);
    const contieneNumerosApellido = /\d/.test(apellido);

    if (contieneNumerosNombre || contieneNumerosApellido) {
        alert('¡Error! El nombre y el apellido no deben contener números.');
        return false;
    }

    const edadNum = parseInt(edad);
    if (isNaN(edadNum) || edadNum <= 18) {
        alert('¡Error! Debe tener más de 18 años.');
        return false;
    }

    // Redirige a la página gracias.html si el formulario es válido
    window.location.href = "gracias.html";
    return false;
}

let mostrarImagen = (tipo) => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing new image
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    if (tipo === 'restaurante') {
        img.src = 'imagenes/brasserie.jpeg';
    } else if (tipo === 'actividades') {
        img.src = 'imagenes/fourviere.jpg';
    } else if (tipo === 'alojamiento') {
        img.src = 'imagenes/alojamiento.jpeg';
    }
}
let cargarEventListener = ()  => {
    const canvas = document.getElementById('mifirma');
    const ctx = canvas.getContext('2d');
    let drawing = false;

    canvas.addEventListener('mousedown', (event) => {
        drawing = true;
        draw(event);
    });

    canvas.addEventListener('mouseup', () => {
        drawing = false;
        ctx.beginPath(); // Reset the path
    });

    canvas.addEventListener('mousemove', (event) => {
        if (drawing) {
            draw(event);
        }
    });

    function draw(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
}

// Charger ecoute d'évènement du trackpad
window.addEventListener('load', cargarEventListener);

