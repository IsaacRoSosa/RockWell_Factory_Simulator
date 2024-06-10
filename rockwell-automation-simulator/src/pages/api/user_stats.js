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
  if (req.method === 'GET') {
    try {
      // Leer la cookie del encabezado de la solicitud
      const cookies = cookie.parse(req.headers.cookie || '');
      const userCookie = cookies.user;

      if (!userCookie) {
        res.status(401).json({ message: 'User not authenticated' });
        return;
      }

      // Decodificar la cookie
      const userData = JSON.parse(userCookie);
      const userId = userData.user_id;

      // Conectar a la base de datos
      const client = await pool.connect();

      // Realizar las consultas necesarias
      const userQuery = `
        SELECT u.user_username, u.date_registered, u.user_experience_center, c.company_name
        FROM "User" u
        JOIN "Company" c ON u.id_companyu = c.id_company
        WHERE u.id_user = $1
      `;
      const userResult = await client.query(userQuery, [userId]);

      if (userResult.rows.length === 0) {
        res.status(404).json({ message: 'User not found' });
        client.release();
        return;
      }

      const user = userResult.rows[0];

      // Formatear la fecha
      user.date_registered = new Date(user.date_registered).toISOString().split('T')[0];

      //Obtenemos para el LeaderBoard
      // Realizar las consultas necesarias
      const leaderboardQuery = `
      SELECT u.user_username, u.date_registered, u.user_experience_center, c.company_name, MAX(e.score) AS max_score, MAX(e.satisfaction) AS max_satisfaction, MAX(e.date_played) AS last_played
      FROM "User" u
      JOIN "Company" c ON u.id_companyu = c.id_company
      JOIN "Experience" e ON u.id_user = e.id_usere
      GROUP BY u.id_user, c.id_company
      ORDER BY max_score DESC, max_satisfaction DESC
      LIMIT 5
    `;
      const leaderboardResult = await client.query(leaderboardQuery);
      const leaderboard = leaderboardResult.rows;

      //formatear la fecha 
      leaderboard.forEach((item) => {
        item.last_played = new Date(item.last_played).toISOString().split('T')[0];
      });
              

      client.release();
      res.status(200).json({ leaderboard, user });
        } catch (error) {
      console.error('Database query failed:', error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  } else {
    res.status(405).end();
  }
}
