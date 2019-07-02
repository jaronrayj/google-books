import React, { Component } from "react";
import DeleteBtn from '../components/DeleteBtn'
import Form from '../components/Form'
import Nav from '../components/Nav'
import LikeBtn from '../components/LikeBtn'
import { List } from 'semantic-ui-react';
import ListItem from '../components/ListItem';
import API from '../utils/API'
import "./style.css"

class App extends Component {
  state = {
    books: [],
    saved: [],
    search: ""
  }

  componentDidMount() {
    this.loadSaved();
  }

  loadSaved = () => {
    API.getBooks()
      .then(res =>
        this.setState({ saved: res.data })
      )
  }

  searchBook = () => {
    API.search(this.state.search)
      .then(res =>
        this.setState({ books: res.data, search: "" }));
    console.log(this.state.books)

  }

  render() {
    return (
      <>
        <Nav />
        <Form
          search="Google Books"
          placeholder="Search"
        />
        <List>
          <ListItem>
            <LikeBtn id="thisId" />

          </ListItem>
        </List>
      
        <DeleteBtn onClick />
      </>
    );
  }
}

export default App;
