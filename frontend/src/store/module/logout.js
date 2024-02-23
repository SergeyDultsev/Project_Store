import axios from 'axios';

const actions = {
    async logout({ commit }) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/logout`);

            if (response.status === 200) {
                commit('clearToken');
                return response.data.data.message;
            } else {
                return Promise.reject('Ошибка при выходе из учетной записи');
            }
        } catch (error) {
            return Promise.reject('Произошла ошибка при выходе из учетной записи');
        }
    }
};

const mutations = {
    clearToken(state) {
        state.token = null;
    }
};

export default {
    actions,
    mutations
};