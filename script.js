// Validación e interacción básica del formulario de contacto
document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí recolectaremos los datos más adelante
    alert('¡Gracias por comunicarte! Muy pronto nos pondremos en contacto para coordinar los detalles de tu evento.');
    
    // Limpiar el formulario
    this.reset();
});