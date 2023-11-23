import mysql from "mysql2"

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',         // Cambia esto a la dirección de tu servidor MySQL
  user: 'Joel',        // Cambia esto al nombre de usuario de tu base de datos
  password: '17799121',  // Cambia esto a la contraseña de tu base de datos
  database: 'bd_articulos' // Nombre de tu base de datos
});

// Establece la conexión
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});



// Cierra la conexión cuando hayas terminado


export default connection;