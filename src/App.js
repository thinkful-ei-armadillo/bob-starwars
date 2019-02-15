import React, { Component } from 'react';

import './App.css';
import Results from './Results'
import StarContext from './StarContext'

class App extends Component {
  BASE_URL = 'https://swapi.co/api'
  constructor(props){
    super(props);
    this.state = {
      input: '',
      results: '',
      searchType: 'people',
      handleChange: (value) => {
        this.setState({
          input:value
        })
      },
      addResults: (results) => {
        this.setState({
          results:results,
        })
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const allOrSome = (this.state.input === '~') ? '' : `?search=${this.state.input}`; 
    //is there a way to display all results? nested fetches to go to .next? (there are multiple pages )

    fetch(`${this.BASE_URL}/${this.state.searchType}/${allOrSome}`, {
      method:'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res=>{
      if (!res.ok) {
        throw new Error('please check your input and try again')
      }
      return res.json()
    })
    .then(obj => {
      console.log(obj);
      this.state.addResults(obj.results)
    })
    .catch(obj => console.log(e))
  }
  
  render() {  
    const contextValue = {
      results: this.state.results,
    }
    // slight misunderstanding on how context syntax works
    return (
      <StarContext.Provider value={contextValue}>
      <div className="App">
        <header className="App-header">
          <form onSubmit={(e) => {this.handleSubmit(e)}}>
            <label>
              Search for STAR WARS: <input required type = "text" onChange = {(e) => {this.state.handleChange(e.target.value)}}/>
            </label>
            <label>
              Search by:
              <select onChange = {(e) => this.setState({searchType:e.currentTarget.value})}> {/*why doesn't required work here?*/}
                <option disabled selected>Select what to search by</option> {/*react wants me to use defaultValue instead of selecetd but then disbled doesn't work */}
                <option value = 'films'>films</option>
                <option value = 'people'>people</option>
                <option value = 'planets'>planets</option>
                <option value = 'species'>species</option>
                <option value = 'starships'>starships</option>
                <option value = 'vehicles'>vehicles</option>
              </select>
            </label>
            <button type = "submit">Submit</button>
          </form>

          <Results />
        </header>
      </div>
      </StarContext.Provider>
    );
  }
}

export default App;
