import axios from "axios";
import {API_URL} from "./api";

export const getTickets = async (page: number, userType: string) => {
    return axios.get(`${API_URL}/api/tickets?page=${page} &userType=${userType}`);
}