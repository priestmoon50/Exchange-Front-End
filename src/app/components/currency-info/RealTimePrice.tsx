"use client";

import { Box, Typography, Divider, useTheme } from "@mui/material";
import { FaBitcoin } from "react-icons/fa";

interface RealTimePriceProps {
  currentPrice?: string;
  currentPriceUSD?: string;
  dailyChange?: number;
  buyPrice?: string;
  sellPrice?: string;
  highPrice?: string;
  lowPrice?: string;
}

const RealTimePrice: React.FC<RealTimePriceProps> = ({
  currentPrice = "4,940,123,734",
  currentPriceUSD = "$68,075.98",
  dailyChange = +1.05,
  buyPrice = "4,950,000,000",
  sellPrice = "4,945,000,000",
  highPrice = "5,000,000,000",
  lowPrice = "4,000,000,000",
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: "right", color: theme.palette.text.primary, p: 3 }}>
      <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 2 }}>
        قیمت لحظه‌ای:
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Box>
          <Typography variant="h4" fontWeight="700" sx={{ mb: 0.5 }}>
            {currentPrice} تومان
          </Typography>
          <Typography variant="body1" color="text.secondary" fontWeight="500" sx={{ textAlign: "left" }}>
            {currentPriceUSD}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Box textAlign="right" sx={{ mr: 1 }}>
            <Typography variant="h6" fontWeight="700">
              بیت کوین
            </Typography>
            <Typography variant="body2" color="text.secondary">
              BTC
            </Typography>
          </Box>
          <FaBitcoin size={30} color="#f7931a" />
        </Box>
      </Box>

      <Divider sx={{ borderColor: theme.palette.divider, my: 2 }} />

      <Box mt={2}>
        <Box display="flex" justifyContent="space-between" mb={1.5}>
          <Typography component="span" color={dailyChange > 0 ? "success.main" : "error.main"} fontWeight="600">
            {dailyChange > 0 ? "+" : ""}
            {dailyChange}%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            تغییر قیمت امروز
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mb={1.5}>
          <Typography component="span" color="primary" fontWeight="600">
            {buyPrice} تومان
          </Typography>
          <Typography variant="body2" color="text.secondary">
            خرید بیت کوین
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mb={1.5}>
          <Typography component="span" color="error" fontWeight="600">
            {sellPrice} تومان
          </Typography>
          <Typography variant="body2" color="text.secondary">
            فروش بیت کوین
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mb={1.5}>
          <Typography component="span" color="primary" fontWeight="600">
            {highPrice} تومان
          </Typography>
          <Typography variant="body2" color="text.secondary">
            بالاترین قیمت ۲۴ ساعت
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography component="span" color="error" fontWeight="600">
            {lowPrice} تومان
          </Typography>
          <Typography variant="body2" color="text.secondary">
            پایین‌ترین قیمت ۲۴ ساعت
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RealTimePrice;
