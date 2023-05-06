import React, { Component } from 'react'
import runner from './runner.gif'

export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={runner} alt="loading" />
      </div>
    )
  }
}

export default Loading