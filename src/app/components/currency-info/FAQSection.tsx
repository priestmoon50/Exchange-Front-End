import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        p: 4,
        borderRadius: 2,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        mb: 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold" color="#333" mb={3}>
        سوالات متداول
      </Typography>

      <Accordion
        sx={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          mb: 2,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontWeight: "bold" }}>
          <Typography fontWeight="bold" color="primary">
            رمز ارز چیست؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
            رمز ارز نوعی ارز دیجیتال است که بر اساس فناوری بلاک‌چین ایجاد می‌شود و برای انجام تراکنش‌های مالی به کار می‌رود.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          mb: 2,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontWeight: "bold" }}>
          <Typography fontWeight="bold" color="primary">
            چگونه می‌توانم بیت کوین بخرم؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
            شما می‌توانید از طریق صرافی‌های معتبر، بیت کوین را خریداری کنید و در کیف پول دیجیتالی خود نگهداری کنید.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          mb: 2,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontWeight: "bold" }}>
          <Typography fontWeight="bold" color="primary">
            چرا باید از والت استفاده کنم؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
            والت یا کیف پول دیجیتال برای نگهداری امن ارزهای دیجیتال و انجام تراکنش‌ها به صورت سریع و ایمن استفاده می‌شود.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQSection;
