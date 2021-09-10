import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import HeroText from './components/HeroText'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Productivity from './pages/Productivity';
import Footer from './components/Footer';
import Graphs from './components/Graphs';
import Example from './components/modal';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      
    <Router>
    <div className="App">
      <Route exact path="/">
        <NavBar />
        <LandingPage />        
        <HeroText />
        
        
      </Route>
      
      <Route exact path="/signup">
      <NavBar />
        <Signup />
      </Route>

      <Route exact path="/productivity">
      <NavBar />
        <Productivity />
        <Graphs />
        <Footer />
      </Route>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/productivity">
            <Productivity />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
    </div>

    
    </Router>
   
    </ApolloProvider>

    
    
  );
}



export default App;