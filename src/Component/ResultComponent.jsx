import { Component } from 'react'
import './ResultComponent.css'
import React from 'react'
export default class ResultComponent extends Component {
  render() {
    return (
      <div>
        <h1 id='Result-title'>Result</h1>
        <div id="Result-container">
            <h3 style={{color:'black'}}>You need more practice!</h3>
            <h1>Your score is 20%</h1>
            <div className="Stats-div">
                <div className="Stats">
                    <h4>Total number of questions</h4>
                    <p>15</p>
                </div>
                <div className="Stats">
                    <h4>Number of attempted question</h4>
                    <p>9</p>
                </div>
                <div className="Stats">
                    <h4>Number of corrected answers</h4>
                    <p>3</p>
                </div>
                <div className="Stats">
                    <h4>Number of wrong answers</h4>
                    <p>6</p>
                </div>
            </div>
        </div>
        <div id="Options">
            <button>Play Again</button>
            <button>Back to home</button>
        </div>
      </div>
    )
  }
}
