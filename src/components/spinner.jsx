import React, { Component } from 'react'
import './spinner.css';

export class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <span className="loader"></span>
      </div>
    )
  }
}

export default spinner