import axios from 'axios';

const state = {
    token: localStorage.getItem('token') || null,
    error: null
}

const actions = {
    async login({ commit }, { email, password }) {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, { email, password }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Response from server:', response);
            if (response.status === 200 && response.data && response.data.data.user_token) {
                const token = response.data.data.user_token;
                commit("setToken", token);
                commit("setError", null);
                console.log('Token:', token);
                localStorage.setItem('token', token);
            } else {
                commit("setToken", null);
                const errorMessage = response.data && response.data.message ? response.data.message : 'Произошла ошибка при входе';
                commit("setError", errorMessage);
                localStorage.removeItem('token');
            }
        } catch (error) {
            console.error('Error during login:', error);
            commit("setToken", null);
            commit("setError", "Произошла ошибка при входе");
            localStorage.removeItem('token');
        }
    }
};


const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setError(state, error) {
        state.error = error;
    }
};


const getters = {
    setToken: state => state.token,
    setError: state => state.error,
}

export default {
    state,
    actions,
    mutations,
    getters
}