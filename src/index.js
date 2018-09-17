import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import StudentList from './components/StudentList'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      studentList: []
    }
  }

  componentDidMount () {
    return fetch('https://g95server.herokuapp.com/')
      .then(response => response.json())
      .then(responseJSON => this.setState({studentList: responseJSON.data}))
  }
  render () {
    return (
      <div>
        <StudentList students={this.state.studentList} />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
