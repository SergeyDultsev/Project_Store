
import axios from "axios";

export async function getProductsCart() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching cart:", error);
        throw error;
    }
}

export async function addToCart(productId) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/cart/${productId}`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error adding to cart:", error);
        throw error;
    }
}

export async function deleteFromCart(productId) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/cart/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting from cart:", error);
        throw error;
    }
}