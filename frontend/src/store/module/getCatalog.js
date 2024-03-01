import axios from "axios";

const state = {
    catalog: []
};

const actions = {
    async getProductsCatalog({ commit }) {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
        commit("setCatalog", response.data);
    }
};

const mutations = {
    setCatalog(state, catalog) {
        state.catalog = catalog.data;
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