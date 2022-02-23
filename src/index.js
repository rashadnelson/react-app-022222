import React from 'react' // Importing React from React
import ReactDom from 'react-dom';  // Importing ReactDom, as it contains the render() function

// Stateless functional component
// Always returns JSX.  Include ()
// Capitalize the name of the function making it a React component
// Close every element with a />
// Can only return one complete element - place everything inside a <div>
// Must use camelCase for HTML attributes
// className instead of class

function Greeting() {

  // The JSX being returned
  return (
    <section className="first-component">
      <h4>This is Rashad and this is my
        React component</h4>;
      <ul>
        <li>
          <a href="#">Hello People</a>
        </li>
      </ul>
    </section>
  );
}

/*
// Another way to do it, but not ideal.  
// Passes three things.
// 1. The HTML element
// 2. The props object (to be reviewed)
// 3. The content inside the HTML element
const Greeting = () => {
  return React.createElement("h1", {}, "This is my second React component")
}
*/

// The "root" element in public > index.html is now tied to the "Greeting" component. 
// <What we're going to render/>, Where we're going to render>
ReactDom.render(<Greeting />, document.getElementById('root'));

