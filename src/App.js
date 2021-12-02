import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

//Components
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import User from "./User";
import Error from "./Error";

function App() {
  const user = { name: "jaime", admin: true, id: "00044404040" };

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <br />
      <Link to="/projects">Projects</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to={`/user/${user.id}`}>Go to user</Link>

      <Routes>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/user/:id" render={() => <User />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/projects" render={() => <Projects user={user} />} />
        <Route render={() => <Error />} />
      </Routes>
    </div>
  );
}

export default App;
