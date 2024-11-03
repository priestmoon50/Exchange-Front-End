"use client";

import { Box, Typography, ToggleButton, ToggleButtonGroup, useMediaQuery, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import DefaultChart from "./DefaultChart";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface ChartDataItem {
  timestamp: number;
  price_btc: number;
  rate_dollar: number;
  parity_dollar: number;
}

const PriceChart: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [timeframe, setTimeframe] = useState("24H");
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({
    priceBitcoin: [] as [number, number][],
    rateDollar: [] as [number, number][],
    parityDollar: [] as [number, number][],
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchChartData();
  }, [timeframe]);

  const fetchChartData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://b.wallet.ir/coinlist/chart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          period: timeframe,
          currency_code: "BTC",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from API");
      }

      const result = await response.json();

      if (result && result.data && result.data.length > 0) {
        const formattedData = {
          priceBitcoin: result.data.map((item: ChartDataItem) => [item.timestamp, item.price_btc]),
          rateDollar: result.data.map((item: ChartDataItem) => [item.timestamp, item.rate_dollar]),
          parityDollar: result.data.map((item: ChartDataItem) => [item.timestamp, item.parity_dollar]),
        };
        setChartData(formattedData);
      } else {
        setError("No data available for the selected timeframe.");
      }
    } catch (error) {
      console.error("Error fetching chart data:", error);
      setError("An error occurred while fetching chart data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleTimeframeChange = (event: React.MouseEvent<HTMLElement>, newTimeframe: string | null) => {
    if (newTimeframe) {
      setTimeframe(newTimeframe);
    }
  };

  const chartOptions: Highcharts.Options = {
    title: {
      text: "نمودار قیمت بیت کوین و نرخ برابری تومان",
    },
    xAxis: {
      type: "datetime",
      labels: {
        formatter: function () {
          return new Date(this.value as number).toLocaleDateString("fa-IR", {
            month: "short",
            year: "2-digit",
          });
        },
      },
    },
    yAxis: [
      {
        title: {
          text: "قیمت بیت کوین (تومان)",
        },
        labels: {
          formatter: function () {
            return `${(this.value as number).toLocaleString()} تومان`;
          },
        },
      },
      {
        opposite: true,
        title: {
          text: "نرخ دلار",
        },
        labels: {
          formatter: function () {
            return `${(this.value as number).toLocaleString()} دلار`;
          },
        },
      },
    ],
    tooltip: {
      shared: true,
      formatter: function () {
        return this.points
          ?.map((point) =>
            point.y != null
              ? `<span style="color:${point.color}">\u25CF</span> ${point.series.name}: <b>${point.y.toLocaleString()}</b><br/>`
              : ""
          )
          .join("");
      },
    },
    series: [
      {
        type: "line",
        name: "قیمت بیت کوین",
        data: chartData.priceBitcoin,
        color: "#007bff",
      },
      {
        type: "line",
        name: "نرخ دلار",
        data: chartData.rateDollar,
        color: "#4CAF50",
      },
      {
        type: "line",
        name: "برابری دلار",
        data: chartData.parityDollar,
        color: "#f7931a",
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        p: isMobile ? 2 : 4,
        borderRadius: 3,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        mb: 4,
        textAlign: "right",
        width: "100%",
        maxWidth: isMobile ? "100%" : "1100px",
        mx: "auto",
      }}
    >
      <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold" color="#333" mb={3}>
        نمودار قیمت بیت کوین و نرخ برابری تومان
      </Typography>

      <ToggleButtonGroup
        value={timeframe}
        exclusive
        onChange={handleTimeframeChange}
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "flex-end",
          gap: 1,
          flexWrap: "wrap",
          "& .MuiToggleButton-root": {
            borderRadius: "8px",
            border: "1px solid #ccc",
            color: "#666",
          },
          "& .Mui-selected": {
            backgroundColor: "#007bff",
            color: "#fff",
          },
        }}
        aria-label="Timeframe"
      >
        <ToggleButton value="24H" aria-label="24 ساعت">۲۴ ساعت</ToggleButton>
        <ToggleButton value="1W" aria-label="یک هفته">هفته</ToggleButton>
        <ToggleButton value="1M" aria-label="یک ماه">ماه</ToggleButton>
        <ToggleButton value="1Y" aria-label="یک سال">سال</ToggleButton>
      </ToggleButtonGroup>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height={300}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <DefaultChart />
      ) : (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </Box>
  );
};

export default PriceChart;
