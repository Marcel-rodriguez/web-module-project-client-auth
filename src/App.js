import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login'
import LogOut from './components/LogOut';
import FriendsList from './components/FriendsList'
import { Link, Route, Switch} from 'react-router-dom';
import AddFriends from './components/AddFriends';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('token')){
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <div className="App">
      {isLoggedIn && <Link to='/' > Login </Link>}
      {isLoggedIn && <Link to='/FriendsList'>Friends</Link>}
      {isLoggedIn && <Link to='/AddFriends'>Add Friends</Link>}
      {isLoggedIn && <Link to='/LogOut'>Log out</Link>}
      <Switch>
        <Route exact path='/FriendsList' component={FriendsList} />
        <Route exact path='/AddFriends' component={AddFriends} />
        <Route exact path="/Logout" render={() => <LogOut setIsLoggedIn={setIsLoggedIn} />} />
        <Route exact path='/Login' render={(props) =><Login {...props} setIsLoggedIn={setIsLoggedIn} /> } />
        <Route exact path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
