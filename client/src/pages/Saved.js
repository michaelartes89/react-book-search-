import React, { useState, useEffect } from "react";


import Nav from "../components/Nav"
import API from "../utils/API"
import Jumbotron from "../components/Jumbotron";
import  { Col, Row, Container }  from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";




export default function SavedPage() {
    const [books,setBooks] = useState([])

    useEffect (() => {
        getBooksDB() 

    }, [])
    const getBooksDB = () => {
        API.getBooks()
        .then(res => {
            setBooks(res.data)
        })
        .catch(err => console.log(err))
    }

    const deleteBook = (id) => {
        API.deleteBook(id)
        .then(res => getBooksDB()
        .cath(err => console.log(err)))
    }
    
    return (
        <div>
            <Nav /> 
            <Jumbotron>
                <h1> (React) Google Books Search</h1>
                    <h2> Search for and Save Books of Interest
        
    
                    </h2>
                

            </Jumbotron>
            <Container>
                <Row>
                    <Col size="xs-12">
                        <BookList>
                            {books.map(book => (
                                <BookListItem
                                    key={book._id} 
                                    id={book.id_}
                                    title={book.title}
                                    authors={book.authros}
                                    image={book.image}
                                    description={book.description}
                                    link={book.link}
                                    click={() => deleteBook(book._id)} 
                                    />
                                 ))}
                        </BookList>
                    </Col>

                </Row>
            </Container>
     
      
        </div>

    )
    
}

