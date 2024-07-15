import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';
import { v4 as uuidv4 } from 'uuid';

function TaskInput() {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask({ id: uuidv4(), text: taskText, completed: false }));
      setTaskText('');
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <button className="btn btn-primary" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
