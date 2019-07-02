import React, { Component } from "react";
import Form from '../components/Form'
import Nav from '../components/Nav'
import { List, Card, Image, Container } from 'semantic-ui-react';
import ListItem from '../components/ListItem';
import LikeBtn from '../components/LikeBtn';
import API from '../utils/API'
import GOOGLE from '../utils/googleApi'
import "./style.css"

class App extends Component {
  state = {
    books: [],
    saved: [],
    search: ""
  }

  componentDidMount() {
    this.loadSaved();
    console.log(this.state.saved)
  }

  loadSaved = () => {
    API.getBooks()
      .then(res =>
        this.setState({ saved: res.data })
      )
  }

  addBook = object => {
    API.saveBook({
      title: object.title,
      author: object.author,
      synopsis: object.synopsis,
      image: object.image,
      link: object.link
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search) {
      GOOGLE.search(this.state.search)
        .then(res => {
          console.log(res.data.items)
          this.setState({ books: res.data.items, search: "" })
        })
        .catch(err => console.log(err));
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <>
        <Nav />
        <Form
          search="Google Books"
          placeholder="Search"
          clickHandle={this.handleFormSubmit}
          name="search"
          inputChange={this.handleInputChange}
        />
        <Container>
          <List>
            <br />
            {this.state.books.map(book => {
              let searchBook = book.volumeInfo
              return (
                <ListItem key={book.id}>
                  <Card.Content>
                    <a href={searchBook.previewLink}>
                      <Image floated='right' size='small' src={searchBook.imageLinks.smallThumbnail} />
                    </a>
                    <strong>
                      {searchBook.title}
                    </strong>
                    <br />
                    by {searchBook.authors[0]}
                    <br />
                    <LikeBtn onClick={() => this.addBook({
                      title: searchBook.title,
                      author: searchBook.authors[0],
                      synopsis: searchBook.description,
                      image: searchBook.imageLinks.thumbnail,
                      link: searchBook.infoLink
                    })} />
                  </Card.Content>


                </ListItem>
              );
            })}
          </List>
        </Container>
      </>
    );
  }
}

export default App;
