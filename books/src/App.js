import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AddBook from "./components/AddBook.component";
import EditBooks from "./components/EditBooks.component";
import BookList from "./components/BookList.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Google Books API</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <Link to="/" class="nav-link">Book List <span class="sr-only">(current)</span></Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/create" class="nav-link">Add Book</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/edit/:id" class="nav-link">Edit Books</Link>
                      </li>
                    </ul>
                    <form class="form-inline">
                      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                      <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search Books</button>
                    </form>
                  </div>
            </nav>
              <h2>Books!</h2>
        <Route path="/" exact component={BookList} />
        <Route path="/edit/:id" component={EditBooks} />
        <Route path="/create" component={AddBook} />
        </div>
      </Router>
    );
  }
}

export default App;
