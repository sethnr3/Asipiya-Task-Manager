import React from 'react';
import TaskItem from './TaskItem';

//Component for the task list to change to all, Completed or Not-Completed tasks and to store todo list data

const TaskList = ({ tasks, filter, editTask, deleteTask, toggleCompleted }) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.status;
    if (filter === 'not_completed') return !task.status;
    return true; 
  });

  return (
    <div>
      {filteredTasks.length > 0 ? (
        filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))
      ) : (
        <p className='NoTask'>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
