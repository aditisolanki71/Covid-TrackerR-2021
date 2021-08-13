import React from 'react';
import { Bar } from 'react-chartjs-2';
const BarChart = ({ ageWisePieData }) => {
  const barChart =
    ageWisePieData.length !== 0 ? (
      <Bar
        data={{
          labels: ['18-45', '45-60', '60 above'],
          datasets: [
            {
              label: 'Age Wise Data',
              backgroundColor: ['green', 'yellow', 'red'],
              data: [
                ageWisePieData.map((d) => d.vac_18_45),
                ageWisePieData.map((d) => d.vac_45_60),
                ageWisePieData.map((d) => d.vac_60_above),
              ],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: 'Age wise Data' },
        }}
      />
    ) : null;
  return <div class="container">{barChart}</div>;
};
export default BarChart;
