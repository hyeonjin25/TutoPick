import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { AppColor } from "../../utils/GlobalStyles";

const RatingChart = () => {
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "86.5%",
        },
      },
    },
    labels: ["Satisfaction"],
    colors: [`${AppColor.primary}`],
  });
  const [series, setSeries] = useState([86.5]);

  return (
    <div id='chart'>
      <ReactApexChart
        options={options}
        series={series}
        type='radialBar'
        height={350}
      />
    </div>
  );
};

export default RatingChart;
