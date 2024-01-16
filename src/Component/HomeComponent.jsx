import { Component } from 'react'
import './HomeComponent.css'
import React from 'react'
export default class HomeComponent extends Component {
  render() {
    return (
      <div id='div-container'>
        <h1 style={{color:'#fff'}}>Quiz App</h1>
        <button id="play">Play</button>
      </div>
    )
  }
}
