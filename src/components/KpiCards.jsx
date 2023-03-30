import { Avatar, Grid, Paper, Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Box } from "@mui/system";

const KpiCards = () => {
  const iconSize = {
    ".MuiSvgIcon-root": { fontSize: "2" },
  };
  const data = [
    {
      id: 1,
      title: "sales",
      value: "$40000",
      icon: <MonetizationOnIcon />,
      color: deepPurple[600],
      bgColor: deepPurple[100],
    },
    {
      id: 2,
      title: "profit",
      value: "$30000",
      icon: <ShoppingCartIcon />,
      color: pink[600],
      bgColor: pink[100],
    },
    {
      id: 3,
      title: "purchases",
      value: "$10000",
      icon: <ShoppingCartIcon sx={iconSize} />,
      color: amber[600],
      bgColor: amber[100],
    },
  ];

  return (
    <Grid container justifyContent={"center"} spacing={3}>
      {data.map((item) => (
        <Grid item sm={12} md={6} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Avatar
                sx={{
                  backgroundColor: item.bgColor,
                  color: item.color,
                  width: 60,
                  height,
                }}
              >
                {item.icon}
              </Avatar>
              <Box>
                <Typography variant="button">{item.title}</Typography>
                <Typography variant="h4">{item.value}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default KpiCards;
