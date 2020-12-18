// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Switch, Route, } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import AccountProfile from './components/AccountProfile';

function App() {
  return (
    <>
      <Navbar />
        <Container>
          <Switch>
            <Route
              exact
              path = "/"
              render = { () => <div>Home</div>}
            />
            <Route
              exact
              path = "/account/profile"
              render = { () => <AccountProfile /> }
            />
          </Switch>
        </Container>
    </>
  );
}

export default App;
