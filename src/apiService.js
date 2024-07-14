import axios from "axios";

const API_BASE_URL = "https://api.timbu.cloud";
const API_KEY = import.meta.env.VITE_API_KEY;
const ORGANIZATION_ID = import.meta.env.VITE_ORGANIZATION_ID;
const APP_ID = import.meta.env.VITE_APP_ID;

const sendGetRequests = async (url, parameters) => {
  try {
    const response = await axios.get(url, {
      params: parameters,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const getProducts = async (page = 1) => {
  const url = `${API_BASE_URL}/products`;
  const params = {
    organization_id: ORGANIZATION_ID,
    reverse_sort: false,
    page: page,
    size: 30,
    Appid: APP_ID,
    Apikey: API_KEY,
  };
  const response = await sendGetRequests(url, params);
  return response.data;
};

export const getProduct = async (productID) => {
  const url = `${API_BASE_URL}/products/${productID}`;
  const params = {
    organization_id: ORGANIZATION_ID,
    Appid: APP_ID,
    Apikey: API_KEY,
  };
  const response = await sendGetRequests(url, params);
  return response.data
};

export default getProducts;
