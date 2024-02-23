import axios from "axios";

const state = {
    order: []
};

const actions = {
    async getProductsOrder({ commit }) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/order`);
            commit("setOrder", response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }
};

const mutations = {
    setOrder(state, catalog) {
        state.order = catalog;
    }
};

const getters = {
    getOrder: state => state. order
};

export default {
    state,
    actions,
    mutations,
    getters
};