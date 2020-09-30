import React from 'react';
import './App.css';
import Github from './Github'
import GithubGraphQL from './GithubGraphQL'
import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Your Github
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={4}><GithubGraphQL/>
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
