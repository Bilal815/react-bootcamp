import React from 'react';
import { Bar } from 'react-chartjs-2';



function Barchart() {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 49]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(0,255,255,0.2)',
        borderColor: 'rgba(0,255,255,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0,255,255,0.4)',
        hoverBorderColor: 'rgba(0,255,255,1)',
        data: [35, -38, 45, -40, 26, -25, 38]
      }
    ]
  };

    return (
      <div>
        <h2>Bar Example</h2>
        <Bar
          data={data}
          width={100}
          height={250}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  }    

export default Barchart;