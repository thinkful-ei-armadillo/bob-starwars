import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  BASE_URL = 'https://swapi.co/api/'
  constructor(props){
    super(props);
    this.state = {
      input: '',
      results: '',
      handleChange: (value) => {
        console.log(value);
        this.setState({
          input:value
        })
      },
      handleSubmit: (value) => {
        console.log(value)
      }
    }
  }

  // fetch(`{this.BASE_URL}/people/1`, {
  //   method:'GET',
  //   headers: {'Content-Type': 'application/json'}
  // })
  // .then(res=>res.json())
  // .then(person => {
  
      //})
  
  render() {  
    
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={(e) => {e.preventDefault();this.state.handleSubmit(this.state.input)}}>
            <label>
              Search for STAR WARS: <input type = "text" onChange = {(e) => {this.state.handleChange(e.target.value)}}/>
            </label>
            <button type = "submit">Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
