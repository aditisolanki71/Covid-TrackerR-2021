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
              data: stateChartData.map((d) => d.rural),
              label: 'Rural',
              borderColor: 'blue',
              fill: true,
            },
            {
              data: stateChartData.map((d) => d.urban),
              label: 'Arban',
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
