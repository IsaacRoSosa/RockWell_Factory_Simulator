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


const saltRounds = 10;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    firstname,
    lastname,
    username,
    email,
    password,
    location,
    company,
  } = req.body;

  if (
    !firstname ||
    !lastname ||
    !username ||
    !email ||
    !password ||
    !location ||
    !company
  ) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const client = await pool.connect();

    try {
      let companyId;

      // Check if company exists
      const companyExist = await client.query('SELECT * FROM "Company" WHERE company_name = $1', [company]);

      if (companyExist.rows.length > 0) {
        // Company exists, use its id
        companyId = companyExist.rows[0].id_company;
      } else {
        // Company doesn't exist, insert into Company table
        const companyResult = await client.query('INSERT INTO "Company" (company_name, location) VALUES ($1, $2) RETURNING id_company', [company, location]);
        companyId = companyResult.rows[0].id_company;
      }

      const currentDate = new Date().toISOString().slice(0, 23);

      const userResult = await client.query(
        'INSERT INTO "User" (user_firstname, user_lastname, user_type, user_username, user_password, user_contactemail, date_registered, id_companyu) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id_user',
        [firstname, lastname, 'user', username, password, email, currentDate, companyId]
    );    

      const userId = userResult.rows[0].id_user;
      return res.status(201).json({ message: 'User registered successfully', userId });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Database query failed:', error);
    return res.status(500).json({ message: 'An error occurred while processing your request' });
  }
}

