/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [repos, setRepos] = useState([{}]);

    useEffect(() => {
     async function getRepos() {
        const response = await fetch("https://api.github.com/users/Bilal815/repos");
        const data = await response.json();
        console.log(data);
        setRepos(data);
      }
      getRepos();

    }, [])
    return (
      <div className="App">
        <h1>My Repositories</h1>
        <ul>
          {repos.map((repoObj) => {
            return(<li>{repoObj.name}</li>)
          })}
        </ul>
      </div>
      )
}

export default App;