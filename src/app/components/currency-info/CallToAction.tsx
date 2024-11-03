import { Box, Typography, Button } from "@mui/material";

const CallToAction: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "#f0f4f8",
        p: 5,
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        mt: 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold" color="#333" mb={2}>
        علاقه‌مند به خرید بیت کوین هستید؟
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3} maxWidth="600px" mx="auto">
        ما اینجا هستیم تا شما تجربه‌ای متفاوت از خرید و فروش بیت کوین داشته باشید.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          px: 5,
          py: 1.5,
          fontSize: "1rem",
          fontWeight: "bold",
          backgroundColor: "#007bff",
          borderRadius: "25px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#0056b3",
            boxShadow: "0 4px 12px rgba(0, 91, 187, 0.3)",
          },
        }}
      >
        اکنون شروع کنید
      </Button>
    </Box>
  );
};

export default CallToAction;
