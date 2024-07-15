import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, editTask, toggleTaskCompletion } from '../features/tasksSlice';

function TaskList() {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  const handleRemoveTask = (task) => {
    dispatch(removeTask(task));
  };

  const handleEditTask = (task) => {
    const newText = prompt("Edit Task", task.text);
    if (newText !== null && newText.trim() !== "") {
      dispatch(editTask({ id: task.id, text: newText }));
    }
  };

  const handleToggleCompletion = (task) => {
    dispatch(toggleTaskCompletion(task));
  };

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
          style={{ color: task.completed ? 'gray' : 'black', textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.text}
          <div>
            <button className="btn btn-secondary btn-sm me-2" onClick={() => handleEditTask(task)}>
              Edit
            </button>
            <button className="btn btn-success btn-sm me-2" onClick={() => handleToggleCompletion(task)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button className="btn btn-danger btn-sm" onClick={() => handleRemoveTask(task)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
