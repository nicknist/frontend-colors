import React, { useState, useEffect } from 'react';
import './App.css';
import ColorContainer from '../ColorContainer/ColorContainer';
import Header from '../Header/Header';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import { getProjects } from '../../apiCalls';


//currently hard coded in one project for the time being
const App = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects().then(data => setProjects(data))
  })

  return (
    <div className="App">
      <Header />
      <ColorContainer />
      <ProjectContainer projects={projects}/>
    </div>
  );
}

export default App;
