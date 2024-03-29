import axios from "axios";

const state = {
    cart: [],
    error: null,
    successMessage: null,
};

const actions = {
    async getProductsCart({ commit }) {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            commit("setCart", response.data);
        } catch (error) {
            if (error.response) {
                commit('setErrorCart', 'Error fetching cart');
            }
        }
    },
    async addToCart({ commit }, productId) {
        const token =  localStorage.getItem('token');
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/cart/${productId}`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if(response.status === 201){
            commit('addToCart', response.data.product);
            commit('setSuccessMessage', response.data.message);
        }
        if (response.status === 403) {
            commit('setErrorCart', 'Forbidden for you');
        }
    },
    async deleteToCart({ commit }, productId) {
        const token =  localStorage.getItem('token');
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/cart/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if(response.status === 200){
            commit('deleteToCart', response.data.product);
            commit('setSuccessMessage', response.data.message);
        }
        if (response.status === 403) {
            commit('setErrorCart', 'Forbidden for you');
        }
    },
};

const mutations = {
    addToCart(state, product) {
        state.cart.push(product);
    },
    setCart(state, cart) {
        state.cart = cart.data;
    },
    deleteToCart(state, product) {
        state.cart.splice(product, 1);
    },
    setSuccessMessage(state, message) {
        state.successMessage = message;
    },
    setErrorCart(state, error) {
        state.error = error;
    },
};

const getters = {
    getCart: state => state.cart,
};

export default {
    state,
    actions,
    mutations,
    getters
};