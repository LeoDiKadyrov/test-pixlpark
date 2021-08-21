/* eslint-disable no-unused-vars */
import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            orders: []
        }
    },
    mutations: {
        SET_ORDERS(state, orders) {
            state.orders = orders;
        }
    },
    actions: {
        actionSetOrders(context, orders) {
            context.commit('SET_ORDERS', orders);
        }
    }
})