const express = require('express');
const mysql = require('mysql2'); 
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create connection to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',           
  password: '',        
  database: 'task_manager'   
});

// Make Connection
db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    throw err;
  }
  console.log('MySQL Successfully Connected!!!');
});

// Create Tasks Table
app.get('/createtable', (req, res) => {
  let sql = `CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    status BOOLEAN DEFAULT FALSE
  )`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error creating table:', err);
      res.status(500).send('Error creating table.');
      return;
    }
    res.send('Tasks table created or already exists.');
  });
});

// Get All Saved Tasks
app.get('/tasks', (req, res) => {
  let sql = 'SELECT * FROM tasks';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching tasks:', err);
      res.status(500).send('Error fetching tasks.');
      return;
    }
    res.json(results);
  });
});

// Add a new Task
app.post('/tasks', (req, res) => {
  let newTask = req.body;
  let sql = 'INSERT INTO tasks SET ?';
  db.query(sql, newTask, (err, result) => {
    if (err) {
      console.error('Error adding task:', err);
      res.status(500).send('Error adding task.');
      return;
    }
    res.json({ id: result.insertId, ...newTask });
  });
});

// Update a Task
app.put('/tasks/:id', (req, res) => {
  let updatedTask = req.body;
  let sql = 'UPDATE tasks SET ? WHERE id = ?';
  db.query(sql, [updatedTask, req.params.id], (err, result) => {
    if (err) {
      console.error('Error updating task:', err);
      res.status(500).send('Error updating task.');
      return;
    }
    res.json(result);
  });
});

// Delete a Task
app.delete('/tasks/:id', (req, res) => {
  let sql = 'DELETE FROM tasks WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.error('Error deleting task:', err);
      res.status(500).send('Error deleting task.');
      return;
    }
    res.json(result);
  });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
