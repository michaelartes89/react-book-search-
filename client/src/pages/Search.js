import React, { useState } from "react";

import Nav from "../components/Nav";
import Input from "../components/Input";
import { BookList, BookListItem } from "../components/BookList"

import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Button from "../components/Button";
import thumbnail from "../components/Thumbnail";



export default function SearchPage() {

    const [books,setBooks] = useState([])
    const [bookSearch,setBookSearch] = useState("")

    const handleInputChange = event => {
        const { value } = event.target
        setBookSearch(value)
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        API.searchBooks(bookSearch)
        .then(res => {
            console.log(res.data)
            setBooks(res.data.items)
        })
        .catch(err => console.log(err))
    }
    const handleSave = key => {
        const booktoSave = books.filter(book => book.etag === key.target.value);

    const theBook = {
        title: booktoSave[0].volumeInfo.title,
        author: booktoSave[0].volumeInfo.authors,
        image: booktoSave[0].volumeInfo.imageLinks.thumbnail,
        description: booktoSave[0].volumeInfo.infoLink
    }
        console.log(theBook)
    

    API.saveBook(theBook)
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err))
}
    
    return (
        <div>
            <Nav />
            <Jumbotron>
                <h1> (React) Google Books Search</h1>
                <h2> Search for and Save Books of Interest</h2>
                
            </Jumbotron>
            <Container>
                <Row>
                    <Col size="md-12">
                        <form>
                            <Container>
                                <Row>
                                    <Col size="xs=9 sm-10">
                                        <Input 
                                        name="bookSearch"
                                        value={bookSearch}
                                        onChange={handleInputChange}
                                        placeholder="enter book title"
                                        />
                                    </Col>
                                    <Col size ="xs-3 sm-2">
                                        <Button
                                        click={handleFormSubmit}
                                        type="success"
                                        className="input-lg"
                                        >
                                            Search
                                        </Button>

                                    </Col>
                                </Row>
                            </Container>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col size ="xs-12"> 
                    {!books ? (
                        <h1 className="mt-4"> No Results</h1>
                    ) :
                    !bookSearch
                    ? ( 
                        <h1 className ="mt-4"> search to see results</h1>

                    ) : (
                        <BookList>
                        {books.map(book => (
                          <BookListItem
                            key={book.etag}
                            id={book.etag}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            image={!book.volumeInfo.imageLinks?.thumbnail ? (
                              "https://placehold.it/200x300"
                            ) : (
                                book.volumeInfo.imageLinks.thumbnail
                              )}
                            description={!book.searchInfo?.textSnippet ? (
                              "No description of this book"
                            ) : (
                                book.searchInfo.textSnippet
                              )}
    
                            link={book.volumeInfo.infoLink}
                            click={() => handleSave}
                          />
                        ))}
                      </BookList>
                    )

                                }
                        
                    </Col>
                </Row>
            
                
            </Container>
     
      
        </div>

    )
    
}
