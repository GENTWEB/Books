import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Book = props => (
    <tr>
        <td>{props.book.book_title}</td>
        <td>{props.book.book_author}</td>
        <td>{props.book.book_description}</td>
        <td>{props.book.book_rating}</td>
    </tr>
)

export default class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/books/')
            .then(response => {
                this.setState({ books: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    bookList() {
        return this.state.books.map(function(currentBook, i){
            return <Book book={currentBook} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Book List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Description</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.bookList() }
                    </tbody>
                </table>
            </div>
        )}}