import axios from 'axios';

const state = {
    token: null,
    registrationError: null,
};

const actions = {
    async register({ commit }, { fio, email, password }) {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, { fio, email, password }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 201) {
                const userToken = response.data?.data?.user_token;
                commit('setToken', userToken);
                commit('setRegistrationError', null);
                return userToken;
            } else {
                commit('setRegistrationError', 'Ошибка регистрации');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            if (error.response) {
                console.error('Response status:', error.response.status);
                if (error.response.status === 422) {
                    commit('setRegistrationError', 'Ошибка валидации полей');
                } else {
                    commit('setRegistrationError', 'Произошла ошибка при регистрации');
                }
            }
        }
    },
};

const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setRegistrationError(state, error) {
        state.registrationError = error;
    },
};

const getters = {
    registrationError: state => state.registrationError,
};

export default {
    state,
    actions,
    mutations,
    getters,
};