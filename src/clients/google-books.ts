import axios from "axios";

const { GOOGLE_BOOKS_API_KEY, GOOGLE_BOOKS_API_URL } = process.env;

export const client = axios.create({
  baseURL: GOOGLE_BOOKS_API_URL,
  params: {
    key: GOOGLE_BOOKS_API_KEY,
  },
});
