function descargarAPK() {
    const enlace = document.createElement('a'); // Crear un elemento de enlace
    enlace.href = './deportes.apk'; // Ruta del archivo
    enlace.download = 'deportes.apk'; // Nombre del archivo para la descarga
    enlace.click(); // Simular clic para iniciar la descarga
}