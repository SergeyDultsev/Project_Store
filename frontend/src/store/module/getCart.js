import axios from "axios";

const state = {
    cart: [],
    error: null,
    successMessage : null,
};

const actions = {
    async getProductsCart({ commit }) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart`);
            commit("setCart", response.data);
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    },
    async addToCart({ commit, state }, productId) {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/cart/`, { productId }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if(response.status === 201){
                commit('addToCart', response.data.product);
                commit('setSuccessMessage', response.data.message);
            }
        } catch (error) {
            if (error.response) {
                console.error('Response status:', error.response.status);
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
    clearCart(state) {
        state.cart = [];
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