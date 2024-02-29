import axios from "axios";

const state = {
    order: []
};

const actions = {
    async getOrder({ commit }) {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/order`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            commit("setOrder", response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    },
    async addToOrder({ commit, rootState }) {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/order`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            commit("addToOrder", response.data);
            commit("cart/setCart", [], { root: true });
        } catch (error) {
            console.error("Error adding order:", error);
            throw error;
        }
    }
};

const mutations = {
    addToOrder(state, product) {
        state.order.push(product);
    },
    setOrder(state, catalog) {
        state.order = catalog;
    },
};

const getters = {
    getOrder: state => state. order,
    setErrorOrder: state => state.error,
};

export default {
    state,
    actions,
    mutations,
    getters
};