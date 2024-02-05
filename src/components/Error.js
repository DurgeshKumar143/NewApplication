import React, { Component } from 'react'
import error from './error.png'

export class Error extends Component {
  render() {
    return (
      <div>
        <img src={error} alt=" Error page" />
      </div>
    )
  }
}

export default Error