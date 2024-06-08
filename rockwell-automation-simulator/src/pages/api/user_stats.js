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
      // Parse the cookies from the request
      const cookies = cookie.parse(req.headers.cookie || '');

      // Log cookies
      console.log('Cookies:', cookies);

      // Check if user cookie exists
      if (!cookies.user) {
        console.log('User cookie not found');
        return res.status(400).json({ message: 'User cookie not found' });
      }

      // Get the user data from the cookie
      const userData = JSON.parse(cookies.user);

      // Log user data
      console.log('User data:', userData);

      // Check if user_id exists in userData
      if (!userData.user_id) {
        console.log('User ID not found in cookie');
        return res.status(400).json({ message: 'User ID not found in cookie' });
      }

      // Get the user ID from the user data
      const userId = userData.user_id;

      // Connect to the database and get the user data
      const client = await pool.connect();
      const { rows } = await client.query('SELECT date_registered, user_experience_center, id_company FROM "User" WHERE user_id = $1', [userId]);

      if (rows.length > 0) { 
        const user = rows[0];

        // Get the company of the user
        const { rows: companyRows } = await client.query('SELECT company_name FROM "Company" WHERE id_company = $1', [user.id_company]);

        if (companyRows.length > 0) {
          const company = companyRows[0];

          // Define the variables before using them in the response
          const date_registered = user.date_registered;
          const user_experience_center = user.user_experience_center;
          const company2 = company.company_name;
          const username = userData.user_name;

          // Return the user and company data
          res.status(200).json({
            date_registered,
            user_experience_center,
            company2,
            username
          });
        } else {
          res.status(404).json({ message: 'Company not found' });
        }
      } else {
        res.status(404).json({ message: 'User not found' });
      }

      client.release();
    } catch (error) {
      console.error('Database query failed:', error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  } else {
    console.error('Invalid request method:', req.method);
    res.status(405).end();
  }
}
