import React, { Component } from 'react';

class Github extends Component {
  constructor(props) {
    super(props)
    this.state = { userData: {} }
  }

  componentDidMount() {
    const options = {
      "headers": {
        "Authorization": "token 5e03cdd8add13e772f819e7b831eb775a3da9a7e",
        "Accept": "application/vnd.github.v3+json"
      }
    }
    fetch("https://api.github.com/users/mattybwoy", options)
      .then(response => response.json())
      .then(data => {
        this.setState({userData: data})
      })
  }
  
  render() {
    return (
      <div className="githubs">
        {this.state.userData.name}
         {/* {this.state.items.map((item, index) => <p key={index}><a href={item["webUrl"]}>{item["webTitle"]}</a></p>)} */}
      </div>
    )
  }
}
export default Github