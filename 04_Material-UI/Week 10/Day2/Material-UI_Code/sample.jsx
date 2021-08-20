import React from 'react';
import ReactDOM from 'react-dom';
import {Typography, CssBaseline} from '@material-ui/core/Button';

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));