import axios from 'axios';

const state = {
    token: null,
    error: null
}

const action = {
    async login({commit}, {email, password}){
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`);
            if(response.status === 200){
                commit("setToken", response.data.data.user_token);
                commit("setError", null);
            }else {
                commit("setToken", null);
                commit("setError", response.data.data.message)
            }
        }catch (error){
            commit("setToken", null);
            commit("setError", "Произошла ошибка при входе");
        }
    }
}

const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setError(state, error) {
        state.token = error;
    }
};

const getters = {
    isAuthenticated: state => !!state.token,
    setToken: state => state.token,
    setError: state => state.error,
}

export default {
    state,
    action,
    mutations,
    getters
}