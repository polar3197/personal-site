require('dotenv').config();

const express = require('express')
const app = express()
const port = 3001

// database connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: "book_suggestions",
  port: process.env.DB_PORT,
});

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

// Define an example route to fetch data
app.get('/book_suggestions', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM book_suggestions ORDER BY id ASC');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
