import axios from "axios.ts";   

export const api = axios.create({
  baseURL: 'https://my.api.mockaroo.com',
  headers: {
    "Content-Type": "application/json",
  },
});