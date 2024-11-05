import React, { useState } from 'react';

//Component for the single tasks to mark completed, Edit or Delete

const TaskItem = ({ task, editTask, deleteTask, toggleCompleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, { ...task, name: taskName, description });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-200">
      <div>
        {isEditing ? (
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="border p-1 mr-2"
          />
        ) : (
          <span className={`${task.status ? 'line-through' : ''} text-lg`}>
            {task.name}
          </span>
        )}
        <p className={`${task.status ? 'line-through' : ''} text-sm`}>
          {isEditing ? (
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-1"
            />
          ) : (
            task.description
          )}
        </p>
      </div>
      <div className="flex">
        <button
          onClick={() => toggleCompleted(task.id)}
          className="mr-2 bg-blue-500 text-white px-2 py-1 rounded"
        >
          {task.status ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={handleEdit}
          className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
