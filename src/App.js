import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import CardList from './components/pages/CardList'
import Board from './components/Board'
import Footer from './components/layout/Footer'

import './App.css';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">

          {/* Header: Title, menu and other shenanigens */}
          <Header />
          
          <Route exact path="/" render={props => (
            <React.Fragment>           
              <Board />
            </React.Fragment>
            )} />
            <Route path="/CardList" component={CardList} />

            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
