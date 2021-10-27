import React, { useState } from 'react';
import './App.scss';
import AddTask from './AddTask';
import TaskList from './TaskList';

const App = () => {
  const [stateTasks, setStateTasks] = useState([]);

  const deleteTask = (id) => {
    let tasks = [...stateTasks];
    tasks = tasks.filter((task) => task.id !== id);
    setStateTasks(tasks);
  };

  const changeTaskStatus = (id) => {
    const tasks = [...stateTasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    setStateTasks(tasks);
  };

  const addTask = (text, date, important) => {
    const task = {
      id: Date.now(),
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    setStateTasks((prevState) => [...prevState.concat(task)]);
    return true;
  };
  return (
    <>
      <h1> TODO APP</h1>
      <AddTask add={addTask} />
      <TaskList
        tasks={stateTasks}
        delete={deleteTask}
        change={changeTaskStatus}
      />
    </>
  );
};

export default App;
