import axios from "axios";

const state = {
    cart: [],
    error: null
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
    async addToCart({ commit }, productId) {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/cart/`, { productId });
            commit('addToCart', response.data.product);
        } catch (error) {
            if (error.response) {
                console.error('Response status:', error.response.status);
                if (error.response.status === 403) {
                    commit('setError', 'Forbidden for you');
                }
            }
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