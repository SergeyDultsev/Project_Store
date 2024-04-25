
import axios from "axios";

export async function getProductsCatalog() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching catalog:", error);
        throw error;
    }
}