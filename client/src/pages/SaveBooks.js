import React, { Component } from "react";
import API from "../utils/API";
import SavedBooks from "../components/SavedResult"

class Saved extends Component {
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

            <SavedBooks/>

        )
    }
}

export default SaveBook 
