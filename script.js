// Esperar 5 segundos antes de mostrar la animación de respiración
setTimeout(function() {
    // Ocultar la pantalla de inicio
    document.getElementById('loading-screen').style.display = 'none';
    
    // Mostrar el contenido principal
    document.getElementById('main-content').classList.remove('hidden');
}, 25000);
