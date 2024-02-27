import axios from 'axios';
import router from '@/router/index.js';

const actions = {
    async logout({ commit }) {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            commit('clearToken');
            localStorage.removeItem('token');
            router.push('/authorization');
            return response.data.data.message;
        } catch (error) {
            commit('clearToken');
        }
    }
};

const mutations = {
    clearToken(state) {
        state.token = null;
        localStorage.removeItem("token");
    }
};

export default {
    actions,
    mutations
};