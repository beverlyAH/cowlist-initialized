import React from "react";
import uuid from 'uuid'
import ReactDOM from "react-dom";
import axios from 'axios'
import SingleCow from './SingleCow.jsx'

class Cows extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cows: [],
      name: '',
      description: ''
    }
    this.getCows = this.getCows.bind(this)
    this.saveCow = this.saveCow.bind(this)
    this.clear = this.clear.bind(this)
  }

  componentDidMount() {
    this.getCows()
  }

  getCows() {
    axios.get('/cows')
    .then(results => {
      this.setState({cows: results.data})
    })
    .catch(err => {
      console.error(err)
    })
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  clear() {
    this.setState({name: ''}, () => {
      this.setState({description: ''})
    })
  }

  saveCow() {
    if(this.state.name === '' || this.state.description === '') {
      return
    } else {
      axios.post('/cows', {
        data: {
          id: uuid(),
          name: this.state.name,
          description: this.state.description
        }
      })
      .then(results => {
        this.getCows()
        this.clear()
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
      <table>
        <tbody>
          <tr><td colSpan="2">
          <h1>cows</h1>
          </td></tr>
          
          {this.state.cows && this.state.cows.map(cow => {
            return (
                <SingleCow info={cow} key={cow.id}/>
              )
          })}
          <tr><td colSpan="2"><p className="add">add a new cow!</p></td></tr>
          <tr><td colSpan="2"><input onChange={this.handleChange.bind(this)} value={this.state.name} name="name" type="text" placeholder="name"/></td></tr>
          <tr><td colSpan="2"><input onChange={this.handleChange.bind(this)} value={this.state.description} name="description" type="text" placeholder="description" /></td></tr>
          <tr><td colSpan="2"><button onClick={this.saveCow}>Add Cow</button></td></tr>
          <tr><td colSpan="2"><div className="imgwrapper"><img src="./pngkey.com-moon-emoji-png-419272.png" /></div></td></tr>
          </tbody>
      </table>
      </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Cows />, document.getElementById('app'));