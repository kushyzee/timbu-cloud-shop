import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const ORGANIZATION_ID = import.meta.env.VITE_ORGANIZATION_ID;
const APP_ID = import.meta.env.VITE_APP_ID;

const getProducts = async (page = 1, size = 16) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`, {
      params: {
        organization_id: ORGANIZATION_ID,
        reverse_sort: false,
        page,
        size,
        Appid: APP_ID,
        Apikey: API_KEY,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
getProducts();

export default getProducts;
