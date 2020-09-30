import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Cards.css';

class Github extends Component {
  constructor(props) {
    super(props)
    this.state = { userData: [] }
  }

  componentDidMount() {
    const options = {
      
      "headers": {
        "Authorization": process.env.REACT_APP_TOKEN,
        "Accept": "application/vnd.github.v3+json"
      }
    }
    fetch("https://api.github.com/users/mattybwoy/repos", options)
      .then(response => response.json())
      .then(data => {
        console.log(data) 
        this.setState({userData: data})
      })
  }
  
  render() {
    return (
      <div className="githubs">
        {this.state.userData.map((item, index) => {
          return (
        <Card key = {index} className="cards">
          <CardContent>
            <Typography>
                <a href={item["html_url"]}>{item["name"]}</a>
            </Typography>
          </CardContent>
        </Card>
  )})}
      </div>
    )
  }
  }
export default Github