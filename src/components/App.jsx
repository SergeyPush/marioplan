import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./layout/Navbar";
import Dashboard from "./dashboard/Dashboard";
import ProjectDetails from "./projects/ProjectDetails";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import CreateProject from "./projects/CreateProject";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
          <Switch>
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
