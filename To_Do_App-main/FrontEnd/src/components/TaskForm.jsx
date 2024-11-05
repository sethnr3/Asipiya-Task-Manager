import React, { useState } from 'react';

// Component for the form to add the name and description of the tasks

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) return;

    const newTask = {
      name: taskName,
      description,
      status: false,
    };

    addTask(newTask);
    setTaskName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <div style={{ marginBottom: '0.5rem' }}>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          style={{
            border: '1px solid #e2e8f0',
            padding: '0.75rem',
            width: '100%',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            outline: 'none',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.2s ease',
          }}
        />
      </div>
      <div style={{ marginBottom: '0.5rem' }}>
        <textarea
          placeholder="Description of Task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            border: '1px solid #e2e8f0',
            padding: '0.75rem',
            width: '100%',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            outline: 'none',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.2s ease',
            minHeight: '100px',
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: 'black',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = 'blue')}
        onMouseOut={(e) => (e.target.style.backgroundColor = 'black')}
        onMouseDown={(e) => {
          e.target.style.backgroundColor = '#2f855a';
          e.target.style.transform = 'translateY(2px)';
        }}
        onMouseUp={(e) => {
          e.target.style.backgroundColor = 'blue';
          e.target.style.transform = 'translateY(0)';
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
