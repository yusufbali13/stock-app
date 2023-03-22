import axios from "axios";

const login = async (userInfo) => {
  const BASE_URL = "";
  try {
    const { data } = await axios.post(url, userInfo);
  } catch (error) {
    console.log(error);
  }
};
