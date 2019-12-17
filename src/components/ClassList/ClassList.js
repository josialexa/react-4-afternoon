import React, { Component } from 'react';
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
      return <h3 key={v.id}>{v.first_name} {v.last_name}</h3>
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}