import React, { Component } from "react";
import Navbar from '../Navbar'
import Jumbotron from '../Jumbotron'
import API from '../../utils/api'
import ResultCard from "../ResultCard";

class Saved extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        API.getBooks()
            .then(res =>  {
                this.setState({ results: res.data });
                console.log('results:', this.state.results)
            })
            .catch(err => {
                throw err
            })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <div className='container'>
                    <h3>Your Saved Books</h3>
                    <div className='container-fluid' id='main-content'>
                        {this.state.results.map((book) => {
                            return (
                                <ResultCard
                                    key={book._id}
                                    title={book.title}
                                    id={book._id}
                                    link={book.link}
                                    author={book.authors}
                                    image={book.image}
                                    description={book.description}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Saved;
