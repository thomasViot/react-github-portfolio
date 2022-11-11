import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../styles/Submitted.css"

export class Submitted extends Component {
  static propTypes = {}

  render() {
    return (
        <div className='container-sub'>
            <h1>Thank you, response sent !</h1>
            <Link to="/react-github-portfolio" className='button-sub'>Close</Link>
        </div>
    )
  }
}

export default Submitted