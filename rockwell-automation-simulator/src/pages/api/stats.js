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
  if (req.method === 'GET') {
    try {
      const client = await pool.connect();

      // Datos para la tabla de usuarios
      // Obtener el total de usuarios
      const totalUsersResult = await client.query('SELECT COUNT(*) FROM "User"');
      const totalUsers = totalUsersResult.rows[0].count;
      // Obtener el número de usuarios registrados hoy
      const today = new Date();
      const todayDateString = today.toISOString().split('T')[0];
      const newUsersTodayResult = await client.query('SELECT COUNT(*) FROM "User" WHERE DATE(date_registered) = $1', [todayDateString]);
      const newUsersToday = newUsersTodayResult.rows[0].count;

      //Datos para la tabla de Game Success
      //Obtener el total de jugadores que han jugado
      const players = await client.query('SELECT COUNT(*) FROM "Experience"');
      const totalPlayers = players.rows[0].count;
      //Obtener el total de jugadores que han jugado y han sido contactados
      const contacted = await client.query('SELECT COUNT(*) FROM "Experience" WHERE contact = true');
      const contactedPlayers = contacted.rows[0].count;
      //obtener el total de jugadores que han jugado y no han sido contactados
      const notContacted = await client.query('SELECT COUNT(*) FROM "Experience" WHERE contact = false');
      const notContactedPlayers = notContacted.rows[0].count;
      //Obtener el game succes que se mide por el porcentaje de jugadores que han jugado y han sido contactados
      const gameSuccess = contacted.rows[0].count / players.rows[0].count;


      //Datos para el satisfaction rate
      //Obtener el total de jugadores con un satisfaction mayor a 70
      const satisfaction = await client.query('SELECT COUNT(*) FROM "Experience" WHERE satisfaction > 70');
      const satisfactionPlayers = satisfaction.rows[0].count;
      //Obtener el total de jugadores con un satisfaction menor a 70
      const dissatisfaction = await client.query('SELECT COUNT(*) FROM "Experience" WHERE satisfaction < 70');
      const dissatisfactionPlayers = dissatisfaction.rows[0].count;
      //Obtener el porcentaje de satisfacción
      const satisfactionRate = satisfaction.rows[0].count / players.rows[0].count;

      //Obtener datos para el grafico de gameTime
       // Obtener datos de tiempo de juego
       const playTimeResult = await client.query('SELECT date_played, AVG(EXTRACT(epoch FROM playtime)/60) as avg_play_time_minutes FROM "Experience" GROUP BY date_played ORDER BY date_played;');
       const playTimeData = playTimeResult.rows; 
 
       // Obtener las fechas de juego y el tiempo promedio de juego para la gráfica
const playDates = playTimeData.map(row => {
  const date = new Date(row.date_played);
  return date.toLocaleDateString('en-GB');
});
const avgPlayTimes = playTimeData.map(row => row.avg_play_time_minutes);

      // Obtener información de usuarios con compañía
      const usersWithCompanyResult = await client.query(`
        SELECT u.user_username, u.user_contactemail, u.date_registered::date, c.company_name 
        FROM "User" u 
        JOIN "Company" c ON u.id_companyu = c.id_company
        WHERE u.user_type = 'user'

      `);
      const usersWithCompany = usersWithCompanyResult.rows;

      client.release();


      res.status(200).json({ 
        totalUsers, 
        newUsersToday,
        usersWithCompany,  // Incluyendo la nueva información
        totalPlayers,
        contactedPlayers,
        notContactedPlayers,
        gameSuccess, 
        satisfactionPlayers,
        dissatisfactionPlayers,
        satisfactionRate,
        playDates,
        avgPlayTimes,
    

      });
    } catch (error) {
      console.error('Database query failed:', error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  } else {
    res.status(405).end();
  }
}
