"use client";

import dynamic from "next/dynamic";
import { Box } from "@mui/material";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DefaultChart: React.FC = () => {
  const defaultPriceData = [
    [new Date("2023-01-01").getTime(), 30000],
    [new Date("2023-02-01").getTime(), 32000],
    [new Date("2023-03-01").getTime(), 34000],
    [new Date("2023-04-01").getTime(), 33000],
    [new Date("2023-05-01").getTime(), 35000],
    [new Date("2023-06-01").getTime(), 37000],
    [new Date("2023-07-01").getTime(), 36000],
  ];

  const defaultRsiData = [
    [new Date("2023-01-01").getTime(), 45],
    [new Date("2023-02-01").getTime(), 55],
    [new Date("2023-03-01").getTime(), 60],
    [new Date("2023-04-01").getTime(), 65],
    [new Date("2023-05-01").getTime(), 70],
    [new Date("2023-06-01").getTime(), 50],
    [new Date("2023-07-01").getTime(), 55],
  ];

  return (
    <Box>
      <Chart
        options={{
          chart: {
            id: "price-chart",
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
          },
          xaxis: {
            type: "datetime",
            labels: {
              style: {
                colors: "#666",
                fontSize: "12px",
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                colors: "#666",
                fontSize: "12px",
              },
              formatter: (value: number) => `$${value >= 1000 ? (value / 1000).toFixed(1) + "K" : value}`,
            },
            title: {
              text: "قیمت (دلار)",
              style: {
                color: "#666",
              },
            },
          },
          stroke: {
            width: 2,
            curve: "smooth",
          },
          colors: ["#007bff"],
          grid: {
            borderColor: "#e0e0e0",
            strokeDashArray: 5,
          },
          tooltip: {
            theme: "light",
          },
          legend: {
            position: "top",
            horizontalAlign: "center",
          },
        }}
        series={[
          {
            name: "قیمت بیت کوین",
            data: defaultPriceData,
          },
        ]}
        type="line"
        height={300}
      />

      <Chart
        options={{
          chart: {
            id: "rsi-chart",
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
          },
          xaxis: {
            type: "datetime",
            labels: {
              style: {
                colors: "#666",
                fontSize: "12px",
              },
            },
          },
          yaxis: {
            min: 0,
            max: 100,
            labels: {
              style: {
                colors: "#666",
                fontSize: "12px",
              },
            },
            title: {
              text: "RSI",
              style: {
                color: "#666",
              },
            },
          },
          stroke: {
            width: 2,
            curve: "smooth",
          },
          annotations: {
            yaxis: [
              {
                y: 70,
                borderColor: "#FF0000",
                label: {
                  text: "اشباع خرید",
                  style: {
                    color: "#fff",
                    background: "#FF0000",
                  },
                },
              },
              {
                y: 30,
                borderColor: "#00FF00",
                label: {
                  text: "اشباع فروش",
                  style: {
                    color: "#fff",
                    background: "#00FF00",
                  },
                },
              },
            ],
          },
          colors: ["#ff6347"],
          grid: {
            borderColor: "#e0e0e0",
            strokeDashArray: 5,
          },
          tooltip: {
            theme: "light",
          },
          legend: {
            position: "top",
            horizontalAlign: "center",
          },
        }}
        series={[
          {
            name: "RSI",
            data: defaultRsiData,
          },
        ]}
        type="line"
        height={200}
      />
    </Box>
  );
};

export default DefaultChart;
