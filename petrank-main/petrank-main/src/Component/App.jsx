import React from "react";
import { useState } from "react";

const App = ({ initialText }) => {
    const [text, setText] = useState(initialText)
  
    const handleTextChange = () => {
      setText('changed in the browser!');
    };
  
    return (
      <div>
        <p>{text}</p>
        <button onClick={handleTextChange}>change text</button>
      </div>
    );
  };
  
  export default App;