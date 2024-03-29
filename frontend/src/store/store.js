import { createStore } from 'vuex'
import authorization from "@/store/module/authorization.js"
import registration from "@/store/module/registration.js";
import logout from "@/store/module/logout.js";
import getCatalog from "@/store/module/getCatalog.js";
import getCart from "@/store/module/getCart.js";
import getOrder from "@/store/module/getOrder.js";

const store = createStore({
    modules: {
        authorization, registration, getCatalog, getCart, getOrder, logout
    }
})

export default store;