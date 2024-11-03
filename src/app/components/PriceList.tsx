"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Pagination,
  PaginationItem,
  Select,
  MenuItem,

  Skeleton,
  useMediaQuery,
  SelectChangeEvent,
  Tooltip,
} from "@mui/material";
import { FaBitcoin, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { styled } from "@mui/system";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";

interface PriceData {
  id: string;
  name: string;
  usdValue: string;
  dailyChange: string;
  buyPrice: string;
  sellPrice: string;
}

const initialData: PriceData[] = Array(30)
  .fill({
    id: "",
    name: "بیت کوین",
    usdValue: "$68,000",
    dailyChange: "+3.5%",
    buyPrice: "63,000 تومان",
    sellPrice: "62,000 تومان",
  })
  .map((item, index) => ({
    ...item,
    id: `${index}`,
    dailyChange: index % 2 === 0 ? "+3.5%" : "-2.63%",
  }));

const itemsPerPage = 10;

const StyledTableCell = styled(TableCell)(() => ({
  backgroundColor: "#f8f8f8",
  borderBottom: "1px solid #e0e0e0",
  color: "#333",
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#fafafa",
  },
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
}));

const PriceList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("");
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLoading, setIsLoading] = useState(false);
  const [data ] = useState<PriceData[]>(initialData);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setSelectedFilter(event.target.value as string);
  };

  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNavigateToCurrencyInfo = (currencyId: string) => {
    router.push(`/currency-info/${currencyId}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: 2,
        boxShadow: "8px 8px 16px #babecc, -8px -8px 16px #ffffff",
        p: 4,
        direction: "rtl",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          sx={{
            fontSize: "2rem",
            fontFamily: "IranianSans, sans-serif",
            color: "#333",
            mb: 3,
          }}
        >
          لیست قیمت لحظه‌ای ارزهای دیجیتال
        </Typography>

        {isMobile ? (
          <Select
            value={selectedFilter}
            onChange={handleFilterChange}
            displayEmpty
            fullWidth
            variant="outlined"
            sx={{
              mb: 3,
              backgroundColor: "rgba(255, 255,255, 0.7)",
              backdropFilter: "blur(5px)",
              borderRadius: 2,
              "& .MuiSelect-select": {
                padding: "10px 14px",
                fontSize: "1rem",
                borderRadius: "8px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#007bff",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#0056b3",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#0056b3",
              },
            }}
          >
            <MenuItem value="" disabled>
              انتخاب فیلتر
            </MenuItem>
            {["دیفای", "حریم خصوصی", "متاورس", "قابل استخراج", "میم کوین", "استیبل کوین", "توکن", "ICO"].map((filter, index) => (
              <MenuItem key={index} value={filter} sx={{ "&:hover": { backgroundColor: "#f1f1f1" } }}>
                {filter}
              </MenuItem>
            ))}
          </Select>
        ) : (
          <Grid container spacing={3} justifyContent="center" mb={5}>
            {["دیفای", "حریم خصوصی", "متاورس", "قابل استخراج", "میم کوین", "استیبل کوین", "توکن", "ICO"].map((filter, index) => (
              <Grid item key={index}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="medium"
                  sx={{
                    fontSize: "1rem",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "25px",
                    backgroundImage: "linear-gradient(135deg, #007bff, #5a67d8)",
                    color: "#ffffff",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundImage: "linear-gradient(135deg, #5a67d8, #007bff)",
                      color: "#ffffff",
                    },
                    boxShadow: "0 2px 10px rgba(0, 123, 255, 0.2)",
                  }}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </Button>
              </Grid>
            ))}
          </Grid>
        )}

        <TableContainer component={Box} sx={{ mb: 2, borderRadius: 2, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" sx={{ fontWeight: "bold" }}>نام رمز ارز</StyledTableCell>
                <StyledTableCell align="center" sx={{ fontWeight: "bold" }}>ارزش دلاری</StyledTableCell>
                <StyledTableCell align="center" sx={{ fontWeight: "bold" }}>تغییر روزانه</StyledTableCell>
                <StyledTableCell align="center" sx={{ fontWeight: "bold" }}>خرید از والت</StyledTableCell>
                <StyledTableCell align="center" sx={{ fontWeight: "bold" }}>فروش به والت</StyledTableCell>
                <StyledTableCell align="center">
                  <TextField
                    size="small"
                    placeholder="جستجو..."
                    variant="outlined"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "20px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#007bff",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#0056b3",
                      },
                    }}
                  />
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                Array.from({ length: itemsPerPage }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell colSpan={6} align="center">
                      <Skeleton variant="text" width="100%" height={30} />
                    </TableCell>
                  </TableRow>
                ))
              ) : currentData.length > 0 ? (
                currentData.map((data) => (
                  <StyledTableRow key={data.id}>
                    <StyledTableCell align="center">
                      <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                        <FaBitcoin size={24} color="#f7931a" />
                        {data.name}
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="center">{data.usdValue}</StyledTableCell>
                    <StyledTableCell align="center" sx={{ color: data.dailyChange.startsWith("-") ? "red" : "green", fontWeight: "bold" }}>
                      {data.dailyChange.startsWith("-") ? <FaArrowDown /> : <FaArrowUp />} {data.dailyChange}
                    </StyledTableCell>
                    <StyledTableCell align="center">{data.buyPrice}</StyledTableCell>
                    <StyledTableCell align="center">{data.sellPrice}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Tooltip title="مشاهده اطلاعات ارز">
                        <Button
                          variant="contained"
                          color="primary"
                          size="medium"
                          onClick={() => handleNavigateToCurrencyInfo(data.id)}
                          sx={{
                            borderRadius: "20px",
                            padding: "6px 12px",
                            transition: "all 0.3s ease",
                            backgroundImage: "linear-gradient(135deg, #007bff, #5a67d8)",
                            "&:hover": {
                              transform: "scale(1.05)",
                              backgroundImage: "linear-gradient(135deg, #5a67d8, #007bff)",
                            },
                          }}
                        >
                          معامله
                        </Button>
                      </Tooltip>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    داده‌ای موجود نیست
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Box display="flex" justifyContent="center" mt={3} dir="ltr">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            renderItem={(item) => (
              <PaginationItem {...item} sx={{ "&.Mui-selected": { backgroundColor: "#3f51b5", color: "#fff", borderRadius: "50%" }, borderRadius: "50%" }} />
            )}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default PriceList;
