import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css';
import bucket from '../src/cosmic'

async function Posts (){

  const data = await bucket.objects
    .find({
      type: "products", // Object Type slug
    })
    .props("title,slug,metadata") // response properties
    .limit(10);

    return data
  }

function App() {   
  
  const [results, setResults] = useState([])

  const getData = async () =>{
      const data = await bucket.objects
        .find({
          type: "posts", // Object Type slug
        })
        .props("title,slug,metadata") // response properties
        .limit(10);

      setResults(data);
  }

  useEffect(() => {
    getData()
  }, []);

  console.log(results);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
