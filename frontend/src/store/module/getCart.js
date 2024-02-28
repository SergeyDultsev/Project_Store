import axios from "axios";

const state = {
    cart: [],
    error: null,
    successMessage : null,
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
        try {
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
        } catch (error) {
            if (error.response) {
                if (error.response.status === 403) {
                    commit('setErrorCart', 'Forbidden for you');
                }
            }
            throw error;
        }
    },
};

const mutations = {
    addToCart(state, product) {
        state.cart.push(product);
    },
    setCart(state, cart) {
        state.cart = cart;
    },
    deleteCart(state, product) {
        state.cart.splice(product, 1);
    },
    setErrorCart(state, error) {
        state.error = error;
    },
    setSuccessMessage(state, message) {
        state.successMessage = message;
    }
};

const getters = {
    getCart: state => state.cart,
    setErrorCart: state => state.error,
};

export default {
    state,
    actions,
    mutations,
    getters
};