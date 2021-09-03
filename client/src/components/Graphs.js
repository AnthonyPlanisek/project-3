import React, { useState } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_TASKS } from '../utils/queries'

import { Line } from "react-chartjs-2";



export default function Graphs() {
  const {data} = useQuery(QUERY_TASKS);
  console.log('data',data)
const Task = data?.Task || [];
console.log('Task',Task)
console.log('???', JSON.stringify(Task[0]))
const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 14
  }
};
const options = {
  title: {
    display: true,
    text: "Chart Title"
  },
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    ]
  }
};  
  
  return (
      <div className="Graphs">
        <Line data={data} legend={legend} options={options} />
      </div>
    );
  }

  




