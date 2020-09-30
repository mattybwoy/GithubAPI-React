import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Cards.css';

class GithubGraphQL extends Component {
  constructor(props) {
    super(props)
    this.state = { pinnedItems: [], userData: [] }
  }

  componentDidMount() {
    console.log(process.env)
    const options = {
      method: "POST",
      "headers": {
        "Authorization": "Bearer " + process.env.REACT_APP_PINNED_TOKEN
      },body: JSON.stringify({
    query: "query { user(login:\"mattybwoy\") { pinnedItems(first: 6, types: [REPOSITORY, GIST]) { totalCount edges { node { ... on Repository { name } } } } } }"
      })

    }
    fetch("https://api.github.com/graphql", options)
      .then(response => response.json())
      .then(data => {console.log(data)
         this.setState({pinnedItems: data.data.user.pinnedItems.edges})})
      }
  
  render() {
    return (
      <div className="githubs">
        {this.state.pinnedItems.map((item, index) => {
          return (
        <Card key = {index} className="cards">
          <CardContent>
            <Typography>
                {item.node["name"]}
            </Typography>
          </CardContent>
        </Card>
  )})}
      </div>
    )
  }
}
export default GithubGraphQL