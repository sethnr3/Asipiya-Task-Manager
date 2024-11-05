import React from 'react';

// Component for task filter

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
      <button
        onClick={() => setFilter('all')}
        style={{
          marginRight: '1rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: filter === 'all' ? 'black' : 'white',
          color: filter === 'all' ? 'white' : 'black',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '500',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = filter === 'all' ? 'black' : 'white';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = filter === 'all' ? 'black' : 'white';
        }}
      >
        All Tasks
      </button>
      <button
        onClick={() => setFilter('completed')}
        style={{
          marginRight: '1rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: filter === 'completed' ? 'black' : 'white',
          color: filter === 'completed' ? 'white' : 'black',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '500',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = filter === 'completed' ? 'black' : 'white';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = filter === 'completed' ? 'black' : 'white';
        }}
      >
        Completed Tasks
      </button>
      <button
        onClick={() => setFilter('not_completed')}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: filter === 'not_completed' ? 'black' : 'white',
          color: filter === 'not_completed' ? 'white' : 'black',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '500',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = filter === 'not_completed' ? 'black' : 'white';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = filter === 'not_completed' ? 'black' : 'white';
        }}
      >
        Pending Tasks
      </button>
    </div>
  );
};

export default TaskFilter;
