import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
import { Line } from "react-chartjs-2";
import {Subscription} from 'react-apollo';
import gql from 'graphql-tag';
import graphql2chartjs from 'graphql2chartjs';
import {Bar} from 'react-chartjs-2';

const Chart = () => (
  <Query
     query={gql`
      query {
        Articles: articleStats { 
          label: name
          data: points
        }
      }`}>
        {({ loading, error, data})=>{
          if (data) {
            const g2c = new graphql2chartjs(data, (dataset, datapoint)=>{
              return {
                chartType: 'bar',
                label: name
              };
            });
            return <Bar data={g2c.data} />;
          } else{
            return 'error';
          }
          }}


        </Query>
);

export default Chart;


// const chartdata = {

//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       label: "First dataset",
//       data: [33, 53, 85, 41, 44, 65],
//       fill: true,
//       backgroundColor: "rgba(75,192,192,0.2)",
//       borderColor: "rgba(75,192,192,1)"
//     },
//     {
//       label: "Second dataset",
//       data: [33, 25, 35, 51, 54, 76],
//       fill: false,
//       borderColor: "#742774"
//     }
//   ]
// };

// const legend = {
//   display: true,
//   position: "bottom",
//   labels: {
//     fontColor: "#323130",
//     fontSize: 14
//   }
// };

// const options = {
//   title: {
//     display: true,
//     text: "Chart Title"
//   },
//   scales: {
//     yAxes: [
//       {
//         ticks: {
//           suggestedMin: 0,
//           suggestedMax: 100
//         }
//       }
//     ]
//   }
// };

// export default function Graphs() {

//     return (
//       <div className="Graphs">
//         <Line data={chartdata} legend={legend} options={options} />
//       </div>
//     );
//   }