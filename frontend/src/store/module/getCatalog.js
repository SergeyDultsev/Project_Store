import axios from "axios";

const state = {
    catalog: []
};

const actions = {
    async getProducts({ commit }) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
            commit("setCatalog", response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }
};

const mutations = {
    setCatalog(state, catalog) {
        state.catalog = catalog;
    }
};

const getters = {
    getCatalog: state => state.catalog
};

export default {
    state,
    actions,
    mutations,
    getters
};