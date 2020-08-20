import React from 'react'
import {Pie} from 'react-chartjs-2';

function App() {

  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      data: [290, 40, 90],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  };

  return (
    <div>
      <h2>Pie Example</h2>
      <Pie data={data} height={75} />
    </div>
  )
}

export default App
