import React, { Component } from 'react';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeTodoDescription = this.onChangeBookDescription.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookRating = this.onChangeBookRating.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            book_title:'',
            book_author: '',
            book_description: '',
            book_rating: ''
        }
    }
    onChangeBookTitle(e) {
        this.setState({
            book_title: e.target.value
        });
    }

    onChangeBookDescription(e) {
        this.setState({
            book_description: e.target.value
        });
    }

    onChangeBookAuthor(e) {
        this.setState({
            book_author: e.target.value
        });
    }

    onChangeBookRating(e) {
        this.setState({
            book_rating: e.target.value
        });
    }
}