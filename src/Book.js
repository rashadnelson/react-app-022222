// COMPONENT RULES
// Stateless functional component
// Always returns JSX.  Include ()
// Capitalize the name of the function making it a React component
// Close every element with a />
// Can only return one complete element - place everything inside a <div>
// Must use camelCase for HTML attributes
// className instead of class

import React from 'react'

const Book = (props) => {

    const { img, title, author } = props // Props references each single object in the array above.  The destructuring method allows each object property (img, title, and author) to be referenced below

    // attribute, eventHandler
    const clickHander = () => {
        alert("Hello world")
    }

    return (

        <article className="book">

            <img src={img} alt="" />

            <h1>{title}</h1>

            <h4>{author}</h4>

            <button type="button" onClick={clickHander}>Reference Button</button>

        </article>

    )
}

export default Book