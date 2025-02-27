import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state= {
      students: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(res => this.setState({students: res.data}))
      .catch(err => console.log('Get students:', err))
  }

  render() {
    const students = this.state.students.map(v => {
      return <Link key={v.id} to={`/student/${v.id}`}><h3>{v.first_name} {v.last_name}</h3></Link>
    })
    return (
      <div className="box">
        <Link to='/'><button className='back-button'>{'< Back'}</button></Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}