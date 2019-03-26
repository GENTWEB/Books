import React, { Component } from 'react';
import axios from 'axios';

export default class Createbook extends Component {
    constructor(props) {
        super(props);

        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookDescription = this.onChangeBookDescription.bind(this);
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
    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Book Title: ${this.state.book_title}`);
        console.log(`Book Description: ${this.state.book_description}`);
        console.log(`Book Author: ${this.state.book_author}`);
        console.log(`Book Rating: ${this.state.book_rating}`);
        
        const newBook = {
            book_title: this.state.book_title,
            book_description: this.state.book_description,
            book_author: this.state.book_responsible,
            book_rating: this.state.book_priority,
        };

        axios.post('http://localhost:4000/books/add', newBook)
            .then(res => console.log(res.data));

        this.setState({
            book_title:'',
            book_author: '',
            book_description: '',
            book_rating: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add Book</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                            <label>Title: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.book_title}
                                    onChange={this.onChangeBookTitle}
                                    />
                        </div>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.book_description}
                                onChange={this.onChangeBookDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.book_author}
                                onChange={this.onChangeBookAuthor}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.book_rating==='Low'} 
                                    onChange={this.onChangeBookRating}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.book_rating==='Medium'} 
                                    onChange={this.onChangeBookRating}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.book_rating==='High'} 
                                    onChange={this.onChangeBookRating}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Book" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

