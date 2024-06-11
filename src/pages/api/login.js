import { Pool } from 'pg';
import cookie from 'cookie';


const pool = new Pool({
  user: 'reto_3ild_user',
  host: 'dpg-coc8di8l6cac73ermin0-a.oregon-postgres.render.com',
  database: 'reto_3ild',
  password: 'HbB2djxbDDT4UjmokA98wj0yWuSX3K07',
  port: 5432,
  ssl: {
    rejectUnauthorized: false, 
  }
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    try {
      const client = await pool.connect();
      const { rows } = await client.query('SELECT * FROM "User" WHERE user_username = $1', [username]);
      if (rows.length > 0) {
        const user = rows[0];
        console.log("Contraseña almacenada en la base de datos:", user.user_password); // Imprimir la contraseña almacenada
        console.log("Contraseña introducida:", password); // Imprimir la contraseña introducida
        if (password == user.user_password) {
          const userData = {
            user_name: user.user_firstname,
            user_type: user.user_type, 
            user_id: user.id_user
          };

          const serializedCookie = cookie.serialize('user', JSON.stringify(userData), {
         //   httpOnly: true,
         //   secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 24 * 7, // 1 semana
            sameSite: 'strict',
            path: '/'
          });
          console.log('User Id:', user.id_user); // Agrega este log para el Id de usuario

          res.setHeader('Set-Cookie', serializedCookie);
          console.log("Cookie set:", serializedCookie); // Agrega este log para la cookie
          
          console.log("Contraseña correcta"); // Registro de que la contraseña es correcta
          res.status(200).json({ message: 'Login successful!', user_type: user.user_type });
        } else {
          console.log("Contraseña incorrecta"); // Registro de que la contraseña es incorrecta
          res.status(401).json({ message: 'Invalid credentials' });
        }
      } else {
        console.log("Usuario no encontrado"); // Registro de que el usuario no fue encontrado en la base de datos
        res.status(404).json({ message: 'User not found' });
      }
      client.release(); // Liberar el cliente después de usarlo
    } catch (error) {
      console.error('Database query failed:', error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  } else {
    console.error('Invalid request method:', req.method); // Registro de método de solicitud no válido
    res.status(405).end();
  }
}

