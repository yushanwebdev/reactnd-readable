import { Component } from 'react';
import * as API from './utils/API';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log(API.votePost('8xf0y6ziyjabvozdd253nd', 'upVote'));
  }

  render() {
    return(
      <div>
        App
      </div>
    )
  }
}

export default App;
