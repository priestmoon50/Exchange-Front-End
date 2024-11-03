"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

const CurrencyInfo: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        p: isMobile ? 2 : 4,
        borderRadius: 3,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        textAlign: "right",
        fontFamily: "IranianSans, Arial, sans-serif",
      }}
    >
      <Box sx={{ width: isMobile ? "100%" : "50%", pr: isMobile ? 0 : 3, mb: isMobile ? 3 : 0 }}>
        <Image
          src="/images/btc.webp"
          alt="بیت کوین"
          width={isMobile ? 350 : 400}
          height={isMobile ? 230 : 300}
          style={{ borderRadius: "8px", width: "100%", height: "auto" }}
        />
      </Box>

      <Box sx={{ width: isMobile ? "100%" : "50%", pl: isMobile ? 0 : 3 }}>
        <Typography variant="h5" fontWeight="bold" color="text.primary" gutterBottom>
          <span style={{ color: "black" }}>درباره</span>{" "}
          <span style={{ color: "#007bff", fontSize: "1.2em" }}>بیت کوین</span>
        </Typography>
        
        <Typography variant="body1" color="text.secondary" lineHeight={1.8} mt={2}>
          بیت کوین با نماد اختصاری <span style={{ color: "#007bff", fontWeight: "bold" }}>BTC</span> یک ارز دیجیتال با شکل دارایی دیجیتال است که با ارزش بازار حدود 541 میلیارد دلار، در رتبه 1 بازار قرار داشته و سهم 52.484 درصدی از کل بازار را در اختیار دارد. هر واحد از بیت کوین در این لحظه با قیمت 67977.99 دلار با احتساب نرخ تتر 64575 تومان معادل 4389678704.25 تومان معامله می‌شود و حجم مبادلات روزانه آن 203676618855.02 دلار است. قیمت در ۲۴ ساعت اخیر 1.53 تغییر یافته است. بالاترین قیمت بیت کوین در تاریخ 1402 اسفند 24 معادل 73628.4 دلار بوده که همینک 7.67 درصد پایین‌تر از آن زمان است.
        </Typography>
      </Box>
    </Box>
  );
};

export default CurrencyInfo;
