import { useSelector } from "react-redux";
import { covidDataSelector } from "../../redux/Slices/dataSlice";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartDetails() {
  const covidData = useSelector(covidDataSelector);

  const data = {
    labels: ['Deaths', 'Confirmed' ],
    datasets: [
      {
        label: 'Total Number',
        data: [
            `${covidData.deaths}`,
            `${covidData.confirmed}`
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
         
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  

  

  return <div className="Chart-Details">  <Pie data={data} /></div>;
}

export default ChartDetails;
