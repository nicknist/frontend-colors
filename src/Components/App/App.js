import React, { Component } from 'react';
import './App.css';
import ColorContainer from '../ColorContainer/ColorContainer';
import Header from '../Header/Header';
import ProjectContainer from '../ProjectContainer/ProjectContainer';


//currently hard coded in one project for the time being
class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        { name: 'PROJECT 1',
          palettes: [
          { name: 'NUMBAH1',
            colors: [
              { color: 'white', locked: false },
              { color: 'blue', locked: false },
              { color: 'red', locked: false },
              { color: 'orange', locked: false },
              { color: 'rebeccapurple', locked: false }
            ]
          }
        ]
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ColorContainer />
        <ProjectContainer projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
