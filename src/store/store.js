/**
 * Created by waviq on 24/02/2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        stocks
    }
});
