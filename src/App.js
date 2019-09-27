import React from 'react';
import CardRow from './components/CardRow'


import './App.css';

class App extends React.Component {
  state = {
    activityCards: [
      {
        id: 1,
        content: [
          'todo: fix vertical card size',
        ],
        code: 'WHAT008',
        description: 'Hoooooooooooooooooooooo'
      },
      {
        id: 2,
        content: [
          'Presence',
          'Number of clicks',
          'Number of live interactions'
        ],
        code: 'WHAT007',
        description: 'Some text'
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>
              Look this is a Card
            </h1>
            <CardRow cards={this.state.activityCards}></CardRow>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
