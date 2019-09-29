import React from 'react';
import CardRow from './components/CardRow'


import './App.css';


class ActivityCard {
  constructor(id=0, content=[], code='', description='') {
    this.id = id;
    this.content = content;
    this.code = code;
    this.description = description;
    
  }
}

class App extends React.Component {

  state = {
    activityCards: [
      // Constructed with Class
      new ActivityCard(23, ["Info"], 'YOLO', 'Some interesting information'),

      // Constructed without Class
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
    ],
    interactionCards: [
      {
        id: 1,
        content: [
          'some content stuff',
        ],
        code: 'OWO',
        description: 'Interactions' 
      }
    ],
    enhancedCards: [
      {
        id: 1,
        content: [
          'some content stuff',
        ],
        code: 'OWO',
        description: 'Interactions' 
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
          </div>
        </header>

        <div className='Board'>

          <div className='BoardLeftSide' >
            Things on the left side
          </div>

          <div className='CardRows'>
            <div className='EnhancedCardRow'>
              <CardRow cardType='enhanced' cards={this.state.enhancedCards}></CardRow>
            </div>
            <div className='InteractionCardRow'>
              <CardRow cardType='interaction' cards={this.state.interactionCards}></CardRow>
            </div>
            <div className='ActivityCardRow'>
              <CardRow cardType='activity' cards={this.state.activityCards}></CardRow>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
