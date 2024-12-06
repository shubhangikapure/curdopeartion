import React from 'react';
import ProjectList from './Components/ProjectList';
import "./App.css"

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4"></h1>
      <ProjectList />
    </div>
  );
};

export default App;
