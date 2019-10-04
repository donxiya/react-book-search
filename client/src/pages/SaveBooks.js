import React, { Component } from "react";
import API from "../utils/API";
import SavedResults from "../components/SavedResult"
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class SavedBooks extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ savedBooks: res.data }),
                console.log(this.state.savedBooks)
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid className="container">
                <Jumbotron />
                <Container>
                    <SavedResult savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>        )
    }
}

export default SavedBooks 
