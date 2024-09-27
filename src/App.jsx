import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskCreate from './components/TaskCreate';
import TaskEdit from './components/TaskEdit';
import TaskDelete from './components/TaskDelete';

const App = () => {
  return (
    <div>
      <h2 className="text-center">
       Tasques
      </h2>
      <hr />

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/new" element={<TaskCreate />} />
        <Route path="/edit/:id" element={<TaskEdit />} />
        <Route path="/delete/:id" element={<TaskDelete />} />
      </Routes>

    </div>
  );
};

export default App;
