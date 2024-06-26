import axios from 'axios';

export async function login(email, password) {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, { email, password }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200 && response.data && response.data.data.user_token) {
            const token = response.data.data.user_token;
            localStorage.setItem('token', token);
            return { token, error: null };
        } else {
            const errorMessage = response.data && response.data.message ? response.data.message : 'Authentication failed';
            return { token: null, error: errorMessage };
        }
    } catch (error) {
        return { token: null, error: "Authentication failed" };
    }
}