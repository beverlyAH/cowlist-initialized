import React from 'react'
import Description from './Description.jsx'

class SingleCow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  handleClick() {
    this.setState({show: !this.state.show})
  }

  onClose() {
    this.setState({show: false})
  }

  render() {
    return (
      <React.Fragment>
      <tr>
        <td><p onClick={this.handleClick}>{this.props.info.name}</p></td>
      </tr>
      <Description show={this.state.show} description={this.props.info.description} />
      </React.Fragment>
    )
  }
}

export default SingleCow