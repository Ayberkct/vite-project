import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";
import Header from "./Components/Header/Header";
import { useState } from "react";

function App() {
  const [activeProfile, setActiveProfile] = useState(null);

  return (
    <>
      <Switch>
        <Route exact path='/login'>
          <Header />
          <Login />
        </Route>
        <Route exact path='/home'>
          <Header activeProfile={activeProfile} />
          <Home activeProfile={activeProfile} />
        </Route>
        <Route exact path='/welcome'>
          <Welcome setActiveProfile={setActiveProfile} />
        </Route>
        <Route exact path='/'></Route>
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
