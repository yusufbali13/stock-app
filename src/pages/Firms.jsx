import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchStart } from "../features/authSlice";

const Firms = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getFirms = async () => {
    const BASE_URL = "https://12147.fullstack.clarusway.com/";

    dispatc(fetchStart());
    const { data } = await axios(`${BASE_URL}stock/firms`, {
      headers: { Authorization: `Token ${token}` },
    });
  };

  useEffect(() => {
    getFirms();
  }, []);
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firm
      </Typography>

      <Button variant="contained">New Film</Button>
    </div>
  );
};

export default Firms;
