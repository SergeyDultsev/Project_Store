import axios from "axios";

const state = {
    order: []
};

const actions = {
    async getOrder({ commit }) {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/order`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        commit("setOrder", response.data);
    },
    async addToOrder({ commit, rootState }) {
        const token = localStorage.getItem("token");
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/order`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        commit("addToOrder", response.data);
    }
};

const mutations = {
    addToOrder(state, product) {
        state.order.push(product);
    },
    setOrder(state, catalog) {
        state.order = catalog.data;
    },
};

const getters = {
    getOrder: state => state.order,
};

export default {
    state,
    actions,
    mutations,
    getters
};