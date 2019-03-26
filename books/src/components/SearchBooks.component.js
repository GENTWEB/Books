import React, { Component } from 'react';
import axios from 'axios';



export default class Editbook extends Component {
    componentDidMount() {
        axios.get('http://localhost:4000/search/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    book_title: response.data.book_title,
                    book_description: response.data.book_description,
                    book_author: response.data.book_author,
                    book_rating: response.data.book_rating
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <p>Edit Books Component!!</p>
            </div>
        )
    }
}