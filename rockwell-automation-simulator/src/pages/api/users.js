import { Pool } from 'pg';


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
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    const client = await pool.connect();

    try {
      // Actualizar el campo user_active del usuario a false
     // await client.query('CALL "User" SET user_active = false WHERE id_user = $1', [userId]);

     await client.query('CALL inactive_userv2($1)', [userId]);
      console.log('User disabled successfully')


      return res.status(200).json({ message: 'User disabled successfully' });
      
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Database query failed:', error);
    return res.status(500).json({ message: 'An error occurred while processing your request' });
  }
}