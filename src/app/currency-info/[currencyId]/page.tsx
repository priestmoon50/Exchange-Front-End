import { Container, Box } from "@mui/material";
import ExchangeSection from "@/app/components/currency-info/ExchangeSection";
import CurrencyInfo from "@/app/components/currency-info/CurrencyInfo";
import PriceChart from "@/app/components/currency-info/PriceChart";
import DetailedDescription from "@/app/components/currency-info/DetailedDescription";
import FAQSection from "@/app/components/currency-info/FAQSection";
import CallToAction from "@/app/components/currency-info/CallToAction";

const CurrencyDetailsPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <ExchangeSection />
        <CurrencyInfo />
        <PriceChart />
        <DetailedDescription />
        <FAQSection />
        <CallToAction />
      </Box>
    </Container>
  );
};

export default CurrencyDetailsPage;
