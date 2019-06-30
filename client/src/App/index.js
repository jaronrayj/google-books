import React, { Component } from "react";
import DeleteBtn from '../components/DeleteBtn'
import Form from '../components/Form'
import { Button } from 'semantic-ui-react'
import Nav from '../components/Nav'
import LikeBtn from '../components/LikeBtn'
import "./style.css"

class App extends Component {
  state = {

  }

  render() {
    return (
      <>
        <Nav />
        <Form
          search="Google Books"
          placeholder="Search" />
        <LikeBtn id="thisId" />
      </>
    );
  }
}

export default App;
