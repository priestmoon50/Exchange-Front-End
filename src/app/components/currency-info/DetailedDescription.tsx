"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const DetailedDescription: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        p: isMobile ? 2 : 4,
        borderRadius: 3,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        mb: 4,
        textAlign: "right",
        lineHeight: 1.8,
        fontSize: isMobile ? "0.9rem" : "1.1rem",
        fontFamily: "IranianSans, Arial, sans-serif",
      }}
    >
      <Typography variant="h5" fontWeight="bold" color="#333" mb={2}>
        توضیحات بیشتر درباره <span style={{ color: "#007bff" }}>بیت کوین</span>
      </Typography>
      
      <Typography variant="body1" color="text.secondary" paragraph sx={{ mt: 2, mb: 2, fontSize: "1rem" }}>
        بیت کوین با نماد اختصاری BTC یک ارز دیجیتال با شکل از دارایی دیجیتال است که با ارزش بازار حدود 541 میلیارد دلار، در رتبه 1 بازار قرار داشته و سهم 52.484 درصدی از کل بازار را در اختیار دارد. هر واحد از بیت کوین در این لحظه با قیمت 67977.99 دلار با احتساب نرخ تتر 64575 تومان معادل 4389678704.25 تومان معامله می‌شود و حجم مبادلات روزانه آن 203676618855.02 دلار است. قیمت در ۲۴ ساعت اخیر 1.53 تغییر یافته است. بالاترین قیمت بیت کوین در تاریخ 1402 اسفند 24 معادل 73628.4 دلار بوده که همینک 7.67 درصد پایین‌تر از آن زمان است.
      </Typography>
      
      <Typography variant="body1" color="text.secondary" paragraph sx={{ mt: 2, mb: 2, fontSize: "1rem" }}>
        بیت کوین برخلاف ارزهای معمولی، به صورت غیرمتمرکز عمل می‌کند و تحت کنترل هیچ نهاد یا دولتی نیست. این ویژگی باعث شده تا ارزش آن به صورت مستمر در حال تغییر باشد و همین موضوع جذابیت زیادی برای سرمایه‌گذاران ایجاد کرده است.
      </Typography>
    </Box>
  );
};

export default DetailedDescription;
