import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { AppColor } from "../../utils/GlobalStyles";

const ApexChart = () => {
  const [series] = useState([
    {
      name: "Desktops",
      data: [10000, 12000, 25000, 31000, 49000, 52000, 69000, 71000, 84000],
    },
  ]);

  const [options] = useState({
    chart: {
      toolbar: false,
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Cost per hour by month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    colors: [AppColor.primary],
    xaxis: {
      categories: [
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
      ],
    },
  });

  return (
    <div id='chart'>
      <ReactApexChart
        options={options}
        series={series}
        type='line'
        height={350}
      />
    </div>
  );
};

export default ApexChart;
