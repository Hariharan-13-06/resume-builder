import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import './App.css';
import Body from './components/Body';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/resume">
            <Header />
            <Body />
          </Route>
          <Route path="/">
            <Header />
            <Form />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  overflow-y: overlay;
  background-color: #f3f2ef;
`