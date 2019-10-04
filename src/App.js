import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CardRow from './components/CardRow'
import Dialog from './components/Dialog'
import Header from './components/layout/Header'
import CardList from './components/pages/CardList';

import './App.css';


class ActivityCard {
  constructor(id=0, content=[], code='', description='', isEmpty=true) {
    this.id = id;
    this.content = content;
    this.code = code;
    this.description = description;
    this.isEmpty=isEmpty;
  }
}

class InteractionCard {
  constructor(id=0, content=[], code='', description='', isEmpty=true) {
    this.id = id;
    this.content = content;
    this.code = code;
    this.description = description;
    this.isEmpty=isEmpty;
  }
}

class EnhancedCard {
  constructor(id=0, content=[], code='', description='', isEmpty=true) {
    this.id = id;
    this.content = content;
    this.code = code;
    this.description = description;
    this.isEmpty=isEmpty;
  }
}

class App extends React.Component {

  state = {
    diaglogOpen: false,
    activityCards: //Array(4).fill(new ActivityCard()),
    [
      // Constructed with Class
      // id, content, code, description, isEmpty
      new ActivityCard(23, ["Info"], 'YOLO', 'Some interesting information', false),
      new ActivityCard(1, ['todo: fix vertical card size'], 'WHAT008', 'hoooooooooooooooo', false),
      new ActivityCard(),
      new ActivityCard(2, ['Presence', 'Number of clicks', 'Number of live interactions'], 'WHAT007', 'Some text', false)
    ],

    interactionCards: [
      new InteractionCard(0, ['Notices your card'], 'OWO', 'Interactions', false),
      new InteractionCard(),
      new InteractionCard(),
      new InteractionCard(),
    ],
    enhancedCards: [
      new EnhancedCard(0, ['some content stuff'], 'OWO', 'enhancing', false),
      new EnhancedCard(),
      new EnhancedCard(),
      new EnhancedCard(),
    ]
  }

  render() {
    return (
      <Router>
        <div className="App">

          {/* Header: Title, menu and other shenanigens */}
          <Header />
          
          <Route exact path="/" render={props => (
            <React.Fragment>           
              <div className='Board'>

                <div className='BoardLeftSide' >
                  <button onClick={(e) => this.setState({ diaglogOpen: !this.state.diaglogOpen})}>Show Dialog</button>
                  <p>Things on the left side with some more text en random stuff and I don't know if i'm making typing mistakes but it doesn't matter</p>
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

                {/* This needs to be last */}
                <Dialog isOpen={this.state.diaglogOpen} onClose={(e) => this.setState({ diaglogOpen: false})}>This is a nice dialog box with a lot of dialog that nicely explains what you should do</Dialog>
              </div>
            </React.Fragment> 
            )} />
            <Route path="/CardList" component={CardList} />
        </div>
      </Router>
    );
  }
}

export default App;
