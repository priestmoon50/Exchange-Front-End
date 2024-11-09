// src/app/components/RealTimePrice.tsx

"use client";

import { Box, Typography, Divider, useTheme, CircularProgress } from "@mui/material";
import { FaBitcoin } from "react-icons/fa";
import { PriceData } from "@/types";

interface RealTimePriceProps {
  priceData?: PriceData; // داده‌های دریافتی از صفحه معامله
}

const RealTimePrice: React.FC<RealTimePriceProps> = ({ priceData }) => {
  const theme = useTheme();

  if (!priceData) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height={300}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ textAlign: "right", color: theme.palette.text.primary, p: 3 }}>
      <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 2 }}>
        قیمت لحظه‌ای:
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Box>
          <Typography variant="h4" fontWeight="700" sx={{ mb: 0.5 }}>
            {priceData.sell_irt_price} تومان
          </Typography>
          <Typography variant="body1" color="text.secondary" fontWeight="500" sx={{ textAlign: "left" }}>
            {priceData.price} USD
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Box textAlign="right" sx={{ mr: 1 }}>
            <Typography variant="h6" fontWeight="700">
              {priceData.fa_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {priceData.id}
            </Typography>
          </Box>
          <FaBitcoin size={30} color="#f7931a" />
        </Box>
      </Box>

      <Divider sx={{ borderColor: theme.palette.divider, my: 2 }} />

      <Box mt={2}>
        <Box display="flex" justifyContent="space-between" mb={1.5}>
          <Typography component="span" color={parseFloat(priceData.daily_change_percent) > 0 ? "success.main" : "error.main"} fontWeight="600">
            {parseFloat(priceData.daily_change_percent) > 0 ? "+" : ""}
            {priceData.daily_change_percent}%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            تغییر قیمت امروز
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mb={1.5}>
          <Typography component="span" color="primary" fontWeight="600">
            {priceData.buy_irt_price} تومان
          </Typography>
          <Typography variant="body2" color="text.secondary">
            خرید بیت کوین
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mb={1.5}>
          <Typography component="span" color="error" fontWeight="600">
            {priceData.sell_irt_price} تومان
          </Typography>
          <Typography variant="body2" color="text.secondary">
            فروش بیت کوین
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mb={1.5}>
          <Typography component="span" color="primary" fontWeight="600">
            {priceData.high_irt_price} تومان
          </Typography>
          <Typography variant="body2" color="text.secondary">
            بالاترین قیمت ۲۴ ساعت
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography component="span" color="error" fontWeight="600">
            {priceData.low_irt_price} تومان
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
