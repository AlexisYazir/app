function descargarAPK() {
    const enlace = document.createElement('a'); // Crear un elemento de enlace
    enlace.href = './Deportes.apk'; // Ruta del archivo
    enlace.download = 'Deportes.apk'; // Nombre del archivo para la descarga
    enlace.click(); // Simular clic para iniciar la descarga
}