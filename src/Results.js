import React, {Component} from 'react';
import StarContext from './StarContext';

export default class Results extends Component {
  static contextType = StarContext;

  render() {
    const generateResultsHtml = () => {
      return this.context.results.map((result, index) => {
        return (
          <li key = {index}>{result.name}</li>
        )
      })
    }
    return (
      <div>
        <p>results: </p>
        <ol>
          {this.context.results && generateResultsHtml()}
        </ol>
      </div>
    )
  }
}