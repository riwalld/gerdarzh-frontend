import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
  ? import.meta.env.VITE_BACKEND_URL
  : "http://localhost:8001";

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
  ? import.meta.env.VITE_API_ENDPOINT
  : "/api";

const  MEDIA_ENDPOINT = import.meta.env.VITE_MEDIA_ENDPOINT
  ? import.meta.env.VITE_MEDIA_ENDPOINT
  : "/media";

export const API_URL = BACKEND_URL + API_ENDPOINT;
export const MEDIA_URL = BACKEND_URL + MEDIA_ENDPOINT;
const CSRF_COOKIE_NAME = "csrftoken";
const CSRF_HEADER_NAME = "X-CSRFToken";

export const apiAxios = axios.create({
  baseURL: API_URL,
  xsrfCookieName: CSRF_COOKIE_NAME,
  xsrfHeaderName: CSRF_HEADER_NAME,
});

const mediaAxios = axios.create({
  baseURL: MEDIA_URL,
  xsrfCookieName: CSRF_COOKIE_NAME,
  xsrfHeaderName: CSRF_HEADER_NAME,
});

export async function getImage() {
  try {
    const response = await mediaAxios.get('/endpoint');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message || 'Erreur inconnue');
  }
}