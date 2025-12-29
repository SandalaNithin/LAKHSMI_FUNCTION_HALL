import axios from "axios";

const API = axios.create({
  baseURL: "https://server-2-jbhd.onrender.com",
});

export const sendBooking = (data) => API.post("/api/booking", data);
export const getBlockedDates = () => API.get("/api/booking/blocked-dates");

