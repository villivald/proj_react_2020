// @ts-nocheck

import { Line } from "@reactchartjs/react-chart.js";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "📚 2020",
      data: [7, 7, 3, 4, 8, 6, 8, 7, 4, 3, 6, 6],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <div style={{ width: "60%" }}>
      <Line data={data} options={options} />
    </div>
  </>
);

export default LineChart;
