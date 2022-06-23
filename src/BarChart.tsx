import React, { useContext, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

import DragDataPlugin from 'chartjs-plugin-dragdata';
import { StateContext } from './App';

console.log(DragDataPlugin);

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  DragDataPlugin
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function BarChart() {
  const { activeState } = useContext(StateContext);

  const ref = useRef(0);
  ref.current = activeState;

  console.log('rerender');
  console.log('activeState', activeState);

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Chart.js Bar Chart # ${ref.current}`,
      },
      // @ts-ignore
      dragData: {
        onDragStart: () => {
          console.log(ref.current);
        },
      },
    },
  };
  return <Bar options={options} data={data} />;
}
