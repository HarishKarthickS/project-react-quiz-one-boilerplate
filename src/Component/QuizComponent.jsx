import { Component } from 'react'
import './QuizComponent.css'
import React from 'react'

export default class QuizComponent extends Component {
  render() {
    return (
      <div id="question-container">
        <h2>Question</h2>
        <h4 id="Ques-Num">1 of 15</h4>
        <h3>Which is the only mammal can jump ?</h3>
        <div id="options">
          <div id='option-1'>
            <button>Dog</button>
            <button>Elephant</button>
          </div>
          <div id='option-2'>
            <button>Goat</button>
            <button>Lion</button>
          </div>
        </div>
        <div id='Control'>
            <button id='previous'>Previous</button>
            <button id='next'>Next</button>
            <button id='quit'>Quit</button>
        </div>
      </div>
    )
  }
}
