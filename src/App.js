import { useState, useEffect } from "react";
import "./App.css";
import bucket from "../src/cosmic";
import Main from "./components/Main";

function App() {
  const [results, setResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getData = async () => {
    const data = await bucket.objects
      .find({
        type: "posts", // Object Type slug
      })
      .props("id,title,slug,content,metadata") // response properties
      .limit(10);

    setResults(data);
    setIsLoaded(true);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
        {!isLoaded ? <div> Loading...</div> : <Main results={results} />}
    </div>
  );
}

export default App;
