import React from 'react'

// Getting from Heading Component in App.js need no destructuring
// If you are using default props then destrcuturing is needed.
const Header = ({property})=>{
    
    return (
        <header>
            <h1>{property}</h1>
        </header>
    );
}

Header.defaultProps = {
    property: "Default Property"
}

export default Header