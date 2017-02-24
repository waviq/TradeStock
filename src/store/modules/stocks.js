/**
 * Created by waviq on 24/02/2017.
 */

import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RANDOM_STOCKS'(state) {

    }
};

const actions = {
    buyStock: ({commit}, order) => {
      commit();
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks)
    },
    randomizeStocks: ({commit}) => {
        commit('RANDOM_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
