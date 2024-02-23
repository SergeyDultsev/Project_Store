import axios from "axios";

const state = {
    cart: []
};

const actions = {
    async getProductsCart({ commit }) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart`);
            commit("setCart", response.data);
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    }
};

const mutations = {
    setCart(state, cart) {
        state.cart = cart;
    }
};

const getters = {
    getCart: state => state.cart
};

export default {
    state,
    actions,
    mutations,
    getters
};