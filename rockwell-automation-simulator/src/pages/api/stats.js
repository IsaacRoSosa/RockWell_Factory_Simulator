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

      // Obtener el total de usuarios
      const totalUsersResult = await client.query('SELECT COUNT(*) FROM "User"');
      const totalUsers = totalUsersResult.rows[0].count;

      // Obtener el número de usuarios registrados hoy
      const today = new Date();
      const todayDateString = today.toISOString().split('T')[0];
      const newUsersTodayResult = await client.query('SELECT COUNT(*) FROM "User" WHERE DATE(date_registered) = $1', [todayDateString]);
      const newUsersToday = newUsersTodayResult.rows[0].count;

      // Obtener datos de satisfacción
      const satisfactionResult = await client.query('SELECT satisfaction FROM "Experience"');
      const satisfactionData = satisfactionResult.rows.map(row => row.satisfaction);

      // Obtener datos de clientes contactados
      const clientsContactedResult = await client.query('SELECT contact FROM "Experience"');
      const clientsContactedData = clientsContactedResult.rows.map(row => row.contact);

      // Obtener datos de tiempo de juego
      const playTimeResult = await client.query('SELECT date_trunc(\'day\', playtime) as day, AVG(EXTRACT(epoch FROM playtime)) as avg_play_time FROM "Experience" GROUP BY day');
      const playTimeData = playTimeResult.rows;

      // Obtener información de usuarios con compañía
      const usersWithCompanyResult = await client.query(`
        SELECT u.user_username, u.user_contactemail, u.date_registered::date, c.company_name 
        FROM "User" u 
        JOIN "Company" c ON u.id_companyu = c.id_company
        WHERE u.user_type = 'user'

      `);
      const usersWithCompany = usersWithCompanyResult.rows;

      client.release();

      // Calcular el porcentaje de satisfacción y el éxito del juego
      const calculateSatisfactionPercentage = (data) => {
        const total = data.length;
        const satisfied = data.filter(value => value >= 60).length;
        return (satisfied / total) * 100;
      };

      const calculateGameSuccessPercentage = (data) => {
        const total = data.length;
        const success = data.filter(value => value === true).length;
        return (success / total) * 100;
      };

      const satisfactionPercentage = calculateSatisfactionPercentage(satisfactionData);
      const gameSuccessPercentage = calculateGameSuccessPercentage(clientsContactedData);

      res.status(200).json({ 
        totalUsers, 
        newUsersToday,
        satisfactionData,
        clientsContactedData,
        satisfactionPercentage,
        gameSuccessPercentage,
        playTimeData,
        usersWithCompany  // Incluyendo la nueva información
      });
    } catch (error) {
      console.error('Database query failed:', error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  } else {
    res.status(405).end();
  }
}
