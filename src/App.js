import React from 'react';
import './App.css';
import Github from './Github'
import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Your Github
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          < Grid item xs={4}>
          </Grid>
          <Grid item xs={4}><Github />
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
