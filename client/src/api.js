import axios from 'axios'

const BASE = import.meta.env.VITE_API_URL;

export const getTopCoins = () => axios.get(`${BASE}/coins`)
export const getCoinHistory = (coinId) => axios.get(`${BASE}/history/${coinId}`)
