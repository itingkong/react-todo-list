import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
      arr: [],
      // text:'',
    };
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  handleOnKeyUp(e){
    if(e.keyCode === 13 && this.state.value.trim()){
      this.setState({
        arr: this.state.arr.concat({
          text: this.state.value
        }),
        value:'',
      });
    }else if(e.keyCode === 13 && !this.state.value.trim()){
      alert('message can\'t be empty');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input value={this.state.value}
          onKeyUp={this.handleOnKeyUp}
          onChange={this.handleChange}/>
        <ul className="App-ul">
          {
            this.state.arr.map((item, index) => {
              return(
                <li key={index} className='App-li'>{item.text}</li>
              )
            })
          }
        </ul>
        {/*<p>{this.state.text}</p>*/}
      </div>
    );
  }
}

export default App;
