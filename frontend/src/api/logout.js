import axios from "axios";
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const token = ref(localStorage.getItem('token'));

export const logout = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        });
        clearToken();
        router.push('/authorization');
        return response.data.data.message;
    } catch (error) {
        clearToken();
    }
};

const clearToken = () => {
    token.value = null;
    localStorage.removeItem('token');
};

return {
    logout
};