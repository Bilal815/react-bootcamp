import React, { useState ,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles(() => ({
  list: {
    marginTop: 150,
    background: 'lightgrey',
    position: 'absolute',
    marginLeft: '50%',
    padding: 10
  },
  unlist: {
    listStyle: 'none'
  }
}));

function Myrepos() {

  const classes = useStyles();
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
        <div className={classes.list}>
        <h1>My Repositories</h1>
        <ul className={classes.unlist}>
          {repos.map((repoObj) => {
            return(<li>{repoObj.name}</li>)
          })}
        </ul>
        </div>
      )
}

export default Myrepos;