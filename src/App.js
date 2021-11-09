import {Component} from 'react';

import React from "react";
import Posts from './components/posts';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount(){
    
    fetch('https://my-app.ellenyang.workers.dev/posts')
      .then(res => res.json())
      .then((data) => {
        this.setState({ posts:data})
    })
    .catch(console.lgo)
   
  }
  


  render (){
    return(
      <Posts posts={this.state.posts} />
    );
  }
}

export default App;
