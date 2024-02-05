import React, { Component } from 'react'
import loadings from './loading2.gif'

export class Spinners extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loadings} alt=" Loading" />
      </div>
    )
  }
}

export default Spinners