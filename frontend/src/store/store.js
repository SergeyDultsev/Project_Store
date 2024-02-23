import { createStore } from 'vuex'
import authorization from "@/store/module/authorization.js"
import registration from "@/store/module/registration.js";

const store = createStore({
    modules: {
        authorization, registration
    }
})

export default store;