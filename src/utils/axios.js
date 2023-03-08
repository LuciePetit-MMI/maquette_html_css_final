import axios from 'axios'

export const client = axios.create({
    baseURL: import.meta.env.VITE_WP_API_URL,
    headers: {
        Authorization: `Basic ${btoa(`${import.meta.env.VITE_WP_USERNAME}:${import.meta.env.VITE_WP_PASSWORD}`)}`
    }
})