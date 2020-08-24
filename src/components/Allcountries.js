import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1000,
      margin: '0 auto',
      marginTop: 50
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: 120
    },
    title: {
        color: '#3f51b5',
        textTransform: 'uppercase'
    }
  }));

export default function Allcountries() {
    const classes = useStyles();
  
    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
      async function getData() {
        const response = await fetch("https://api.covidtracking.com/v1/us/current.json")
      let data = await response.json();
        delete data[0].hash;
        setGlobalData(data[0]);
      console.log(data[0]);
      }
      getData(); 
    }, [])
    
    return (
        <div className={classes.root}>
            <table>
              <thead>
                <tr>
                  <td>Total States</td>
                  <td>Total Cases Reported</td>
                  <td>Total Positive Cases</td>
                </tr>
              </thead>
            {Object.keys(globalData).map((key, ind)=> {
                return(
                    <tr key={ind}>
                        <td><h2>{globalData[key].states}</h2></td>
                        <td><h2>{globalData[key].total}</h2></td>
                        <td><h2>{globalData[key].positive}</h2></td>
                    </tr>
                )
            })}
            </table>
    </div>
    )
}
