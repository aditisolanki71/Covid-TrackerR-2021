import React from 'react';
import { Doughnut } from 'react-chartjs-2';
const PieChart = ({ ageWisePieData }) => {
  const pieChart =
    ageWisePieData.length !== 0 ? (
      <Doughnut
        width={100}
        height={50}
        data={{
          labels: ['18-45', '45-60', '60 above'],
          datasets: [
            {
              data: ageWisePieData.map((d) => d.vac_18_45),
              label: '18-45',
              borderColor: 'skyblue',
              fill: true,
            },
            {
              data: ageWisePieData.map((d) => d.vac_45_60),
              label: '45-60',
              borderColor: 'blue',
              fill: true,
            },
            {
              data: ageWisePieData.map((d) => d.vac_60_above),
              label: '60 Above',
              borderColor: 'yellow',
              fill: true,
            },
          ],
        }}
      />
    ) : null;
  return <div class="container">{pieChart}</div>;
};
export default PieChart;
