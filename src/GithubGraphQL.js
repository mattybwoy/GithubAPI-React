import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Cards.css';

class GithubGraphQL extends Component {
  constructor(props) {
    super(props)
    this.state = { userData: [] }
  }

  componentDidMount() {
    const options = {
      method: "POST",
      "headers": {
        "Authorization": "Bearer <TOKEN>",
      },body: JSON.stringify({
    query: "query { user(login:\"mattybwoy\") { pinnedItems(first: 6, types: [REPOSITORY, GIST]) { totalCount edges { node { ... on Repository { name } } } } } }"
      })

    }
    fetch("https://api.github.com/graphql", options)
      .then(response => response.json())
      .then(parsedResponse => console.log(parsedResponse))
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
export default GithubGraphQL