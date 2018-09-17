import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      studentList: []
    }
  }

  componentDidMount () {
    return fetch('http://localhost:5555/')
      .then(response => response.json())
      .then(responseJSON => this.setState({studentList: responseJSON.data}))
      .then(butts => { console.log(this.state) })
  }
  render () {
    return (
      <div>
        <h1>Hiiiiiiiii</h1>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
