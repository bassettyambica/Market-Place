import React, { Component } from "react";
import ProjectList from "../containers/ProjectList";
import '../sass/App.css';


class App extends Component {
  render() {
    return (
      <div className='container'>
        <ProjectList />
      </div>
    );
  }
}

export default App;