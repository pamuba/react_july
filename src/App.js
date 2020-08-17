import React , {Component} from 'react';
import './App.css';
import Hello from './components/Hello';


class App extends Component {
  render(){
    return (
      <div className="App">
       <Hello name="Bruce"/>
       <Hello name="Diana"/>
       <Hello name="Clark"/>
      </div>
    );
  }
}

export default App;
