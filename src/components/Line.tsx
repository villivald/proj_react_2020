import { Line } from "@reactchartjs/react-chart.js";

const books = [3, 4, 2, 4, 5];

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
      data: books,
      label: `📚 2022 - ${books.reduce((item, total) => item + total)} books`,
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
  <div style={{ width: "60%" }}>
    {data && <Line data={data} options={options} />}
  </div>
);

export default LineChart;
