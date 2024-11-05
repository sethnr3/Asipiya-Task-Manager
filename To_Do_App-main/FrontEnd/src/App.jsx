import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    //Fetch tasks from backend
    fetch('http://localhost:5000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error('Error fetching tasks:', err));
  }, []);

  //Function to add a new task
  const addTask = (task) => {
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    .then(res => res.json())
    .then(newTask => setTasks([...tasks, newTask]))
    .catch(err => console.error('Error adding task:', err));
  };

  //Function to edit a task
  const editTask = (id, updatedTask) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    .then(() => {
      setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
    })
    .catch(err => console.error('Error updating task:', err));
  };

  //Function to delete a task
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setTasks(tasks.filter(task => task.id !== id));
    })
    .catch(err => console.error('Error deleting task:', err));
  };

  //Function to toggle a task's completed status
  const toggleCompleted = (id) => {
    const task = tasks.find(task => task.id === id);
    const updatedTask = { ...task, status: !task.status };

    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    .then(() => {
      setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
    })
    .catch(err => console.error('Error toggling task status:', err));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Asipiya Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList tasks={tasks} filter={filter} editTask={editTask} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
    </div>
  );
};

export default App;
