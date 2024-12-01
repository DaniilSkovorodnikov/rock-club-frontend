import axios from "axios";


export const http = axios.create({
    baseURL: 'http://194.67.206.159:8000/api/v1',
    headers: {
        'Content-Type': 'application/json',
      },
})