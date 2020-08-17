import React , {Component} from 'react';
import './App.css';
import Counter from './components/Counter';
import Hello from './components/Hello';
import Message from './components/Message';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

class App extends Component {
  render(){
    return (
      <div className="App">
       {/* <Hello name="Bruce" heroName="Batman">
         <p>This is from the first childern prop</p>
         <p>This is from the second childern prop</p>
       </Hello>
       <Hello name="Diana" heroName="Wonder Women">
         <button>CLICK</button>
       </Hello>
       <Hello name="Clark" heroName="Superman"/> */}

       {/* <Message /> */}

       {/* <Counter></Counter> */}

       {/* <EventBind></EventBind> */}
       <ParentComponent></ParentComponent>
      </div>
    );
  }
}

export default App;
