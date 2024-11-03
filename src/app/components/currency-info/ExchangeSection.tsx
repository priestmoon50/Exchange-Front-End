"use client";

import { Box, Button, IconButton, Typography, Select, MenuItem, TextField, InputAdornment, CircularProgress, useMediaQuery, useTheme } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { MdSwapVert } from "react-icons/md";
import RealTimePrice from "./RealTimePrice";
import { FaBitcoin } from "react-icons/fa";
import FlagIcon from "@mui/icons-material/Flag";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsCurrencyEuro } from "react-icons/bs";
import { useState, useEffect } from "react";

type Currency = "toman" | "usd" | "eur" | "btc" | "eth";

interface CurrencyOption {
  label: string;
  value: Currency;
  icon: JSX.Element;
}

const currencyOptions: CurrencyOption[] = [
  { label: "تومان", value: "toman", icon: <FlagIcon fontSize="small" sx={{ color: "green", mr: 1 }} /> },
  { label: "دلار", value: "usd", icon: <RiMoneyDollarCircleFill style={{ marginRight: "4px" }} /> },
  { label: "یورو", value: "eur", icon: <BsCurrencyEuro style={{ marginRight: "4px" }} /> },
  { label: "بیت کوین", value: "btc", icon: <FaBitcoin style={{ color: "#f7931a", marginRight: "4px" }} /> },
  { label: "اتریوم", value: "eth", icon: <FaBitcoin style={{ color: "#627eea", marginRight: "4px" }} /> },
];

const ExchangeSection: React.FC = () => {
  const [sendCurrency, setSendCurrency] = useState<Currency>("toman");
  const [receiveCurrency, setReceiveCurrency] = useState<Currency>("btc");
  const [sendAmount, setSendAmount] = useState<string>("1000000");
  const [receiveAmount, setReceiveAmount] = useState<string>("0.000025");
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSwapCurrencies = () => {
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(sendCurrency);
    setSendAmount(receiveAmount);
    setReceiveAmount(sendAmount);
  };

  const CurrencyInput = ({
    label,
    selectedCurrency,
    onCurrencyChange,
    amount,
    onAmountChange,
    adornment,
  }: {
    label: string;
    selectedCurrency: Currency;
    onCurrencyChange: (value: Currency) => void;
    amount: string;
    onAmountChange: (value: string) => void;
    adornment: JSX.Element | string;
  }) => (
    <Box mb={isMobile ? 2 : 3}>
      <Typography
        variant="subtitle2"
        fontWeight="bold"
        sx={{ mb: 1, color: "text.primary", textAlign: "right" }}
      >
        {label}
      </Typography>
      <Box display="flex" alignItems="center">
        <Select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange(e.target.value as Currency)}
          sx={{
            width: isMobile ? "40%" : "35%",
            backgroundColor: "background.paper",
            borderRadius: 2,
            mr: 1,
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              padding: "6px 8px",
              fontSize: "0.9rem",
            },
          }}
          MenuProps={{ disableScrollLock: true }}
          aria-label={`انتخاب ${label}`}
        >
          {currencyOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Box display="flex" alignItems="center">
                {option.icon}
                <Typography variant="body2" ml={1}>
                  {option.label}
                </Typography>
              </Box>
            </MenuItem>
          ))}
        </Select>
        <TextField
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          placeholder="مقدار وارد کنید"
          fullWidth
          type="number"
          sx={{
            backgroundColor: "background.paper",
            borderRadius: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              height: isMobile ? 40 : 44,
              fontSize: "0.9rem",
            },
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">{adornment}</InputAdornment>,
          }}
          inputProps={{ "aria-label": "مقدار" }}
        />
      </Box>
    </Box>
  );

  return loading ? (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress />
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        backgroundColor: "#f8f8f8",
        p: 3,
        borderRadius: 3,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        mb: 4,
      }}
    >
      <Box sx={{ width: isMobile ? "100%" : "50%", pr: isMobile ? 0 : 2, mb: isMobile ? 3 : 0 }}>
        <CurrencyInput
          label="ارسال می‌کنید:"
          selectedCurrency={sendCurrency}
          onCurrencyChange={setSendCurrency}
          amount={sendAmount}
          onAmountChange={setSendAmount}
          adornment={sendCurrency === "toman" ? "﷼" : "$"}
        />

        <Box display="flex" justifyContent="center" my={1}>
          <IconButton color="primary" onClick={handleSwapCurrencies} sx={{ fontSize: "1.2rem" }} aria-label="تغییر ارز">
            <MdSwapVert />
          </IconButton>
        </Box>

        <CurrencyInput
          label="دریافت می‌کنید:"
          selectedCurrency={receiveCurrency}
          onCurrencyChange={setReceiveCurrency}
          amount={receiveAmount}
          onAmountChange={setReceiveAmount}
          adornment={<FaBitcoin />}
        />

        <Box
          display="flex"
          flexDirection="column"
          mt={2}
          py={2}
          px={2}
          sx={{ borderTop: "1px solid #e0e0e0" }}
        >
          <Box display="flex" justifyContent="space-between" py={1}>
            <Typography variant="body2" color="text.secondary">
              ۵۰,۴۰۰ دلار
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              نرخ ارز یک
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" py={1}>
            <Typography variant="body2" color="text.secondary">
              ۴۹,۷۵۰ تومان
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              نرخ ارز دو
            </Typography>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            endIcon={<IoIosArrowForward />}
            sx={{
              borderRadius: 4,
              fontWeight: "bold",
              py: 1,
              "&:hover": {
                backgroundColor: "#007bff",
                color: "#fff",
              },
            }}
            aria-label="ثبت سفارش خرید"
          >
            ثبت سفارش خرید
          </Button>
        </Box>
      </Box>

      <Box sx={{ width: isMobile ? "100%" : "50%", pl: isMobile ? 0 : 2 }}>
        <RealTimePrice />
      </Box>
    </Box>
  );
};

export default ExchangeSection;
