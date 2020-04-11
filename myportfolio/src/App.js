import React from 'react';
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import ProjectSubPage from './pages/ProjectSubPage';

class App extends React.Component {

 

   
  render() {
    const  ProjectSubPageComponent = (projectInfo) => {
      return <ProjectSubPage projectInfo={projectInfo}/>
    }

    return (
     <Router>
       <NavBar />
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/aboutMe' component={About} />
         <Route exact path='/projects' component={Project} />
         <Route exact path='/contactMe' component={Contact} />
         <Route exact path='/projectSubPage' component={ProjectSubPageComponent} />
       </Switch>
     </Router>
    )
  }
} 

export default App;
