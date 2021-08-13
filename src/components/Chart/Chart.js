import React from 'react';
import { Line } from 'react-chartjs-2';
const Chart = ({ stateChartData }) => {
  const lineChart =
    stateChartData.length !== 0 ? (
      <Line
        data={{
          labels: stateChartData.map((d) => d.vaccine_date),
          // labels:dailyData.map(({vaccine_date}) => vaccine_date),
          datasets: [
            {
              data: stateChartData.map((d) => d.total),
              label: 'Total Dose',
              borderColor: 'skyblue',
              fill: true,
            },
            {
              data: stateChartData.map((d) => d.dose_1),
              label: 'Dose1',
              borderColor: 'blue',
              fill: true,
            },
            {
              data: stateChartData.map((d) => d.dose_2),
              label: 'Dose2',
              borderColor: 'yellow',
              fill: true,
            },
          ],
        }}
      />
    ) : null;
  return <div class="container">{lineChart}</div>;
};
export default Chart;
