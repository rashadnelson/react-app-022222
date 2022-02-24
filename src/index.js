// DEPENDENCIES
import React from 'react' // Importing React from React
import ReactDom from 'react-dom';  // Importing ReactDom, as it contains the render() function

// CSS - .CSS EXTENTIONS ARE NEEDED FOR CSS FILES
import "./reset.css"
import './index.css'

// IMPORTING COMPONENTS, VARIABLES, ARRAYS, AND OBJECTS
// .JS EXTENSIONS ARE NOT NEEDED FOR JAVASCRIPT FILES
import { books } from './books'  // Importing "books" array
import Book from "./Book" // Importing "Book" component

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book key={book.id} {...book}></Book>
          // key = {book.id} references a unique id for each object of the array and assigns each unique id as a key.  This eliminates the error the browser produces if not included.
          // {...book} is the use of a spread operator, which splits the "book" array into single objects, copies them, and sends to the "props" parameter.  
        )
      })}
    </section>
  )
}

// The "root" element in public > index.html is now tied to the "Greeting" component. 
// <What we're going to render/>, Where we're going to render>
ReactDom.render(<BookList />, document.getElementById('root'));

