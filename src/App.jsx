import "./App.css";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/welcome'>
          <Welcome />
        </Route>
        <Route exact path='/'>
          <Header />
        </Route>
      </Switch>

      <div className='dev-navigation'>
        <Link to='/'>HomePage</Link>
        <Link to='/login'>Login</Link>
        <Link to='/welcome'>Welcome</Link>
        <Link to='/home'>Home</Link>
      </div>
    </>
  );
}

export default App;
