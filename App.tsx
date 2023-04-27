import * as React from 'react';
import React, { useState } from 'react';
import './style.css';
import $ from 'jquery';
import React, { useEffect } from 'react';


function MyComponent(props) {
  useEffect(() => {
    $('button').click(() => {
      console.log('Button clicked!');
    });
  }, []);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Hello</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment count</button>
      <p>This is a simple React component.</p>
    </div>
  );
}
export default function App() {
  return (
    <div>
      <MyComponent names="Alice" />
    </div>
  );
}


export default MyComponent;
