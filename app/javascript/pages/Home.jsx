import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Loading from "../Loading";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartDataLabels
);

const Home = () => {
  // temp
  const [data, setActiveSideNav] = useState("new");
  const floor_2_zones = ["d", "e", "h", "i"];

  // set active sidebar
  useEffect(() => {
    setActiveSideNav("dashboard");
  }, []);

  // Chart data and options
  const floor2data = {
    labels: ["", "Flat 1", "Flat 2", "Flat 3", "Flat 4", "", ""],
    datasets: [
      {
        label: "Vacant",
        data: [, 0, 1, 2, 1, ,],
        backgroundColor: "#4ade80",
        barPercentage: 1, // Set the width of the bars to 100% of the available space
        categoryPercentage: 0.8, // Set the spacing between bars to 0%
        base: -3,
      },
      {
        label: "Occupied",
        data: [, 6, 6, 7, 5, ,],
        backgroundColor: "#ffa500",
        barPercentage: 1, // Set the width of the bars to 100% of the available space
        categoryPercentage: 0.8, // Set the spacing between bars to 0%
        base: -3,
      },
    ],
  };

  const chart_options = {
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "center",
        labels: {
          font: {
            size: 13,
          },
          boxWidth: 20,
        },
      },
      datalabels: {
        display: true,
        color: "black",
        anchor: "end",
        align: "top",
        offset: -6,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: -3,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    // animation: false,
  };

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="flex flex-col h-full py-2">
      {/* Overview */}
      <div className="text-center">
        <div className="">
          <p className="text-base text-left mb-4">Overview</p>
        </div>
        <div className=" h-40 grid lg:grid-cols-4 content-center gap-4 px-2">
          <div className="bg-orange-200 rounded-md  h-36">a</div>
          <div className="bg-orange-200 rounded-md h-36">b</div>
          <div className="bg-orange-200 rounded-md h-36">c</div>
          <div className="bg-orange-200 rounded-md  h-36">d</div>
        </div>
      </div>
      {/* Apartments */}
      <div className="text-center mt-4">
        <div className="">
          <p className="text-base text-left mb-4">Graph Analysis</p>
        </div>
        <div className="flex gap-x-4">
          {/* Totals */}
          <div
            // className="text-gray-500 mt-1 ml-1 absolute w-20 text-xs top-56"
            className="w-20 text-xs text-gray-500"
          >
            <p className="font-bold mb-2 text-sm">Total</p>
            {floor_2_zones.map((zone) => {
              return (
                <article key={zone} className="">
                  <p className="inline-block text-left w-3/4">
                    Zone{" "}
                    <span className="font-medium">{zone.toUpperCase()}</span>
                  </p>
                  <p className="inline-block text-right w-1/4 font-semibold">
                    10
                  </p>
                </article>
              );
            })}
          </div>
          {/* Barchart */}
          <div className="basis-10/12">
            <Bar
              height={200}
              width={100}
              data={floor2data}
              options={chart_options}
            ></Bar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
