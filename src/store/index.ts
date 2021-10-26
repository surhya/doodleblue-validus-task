import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "../store/types";

Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     helloMessge: "hello",
//   },
//   mutations: {},
//   actions: {},
//   modules: {},
// });

const store: StoreOptions<RootState> = {
  state: {
    helloMessage: "hello",
    
    memberstats: {
      totalmember: '6,850',
      activemember: '1,068',
      deactivemember: '125'
    },

    membergymtype: {
      fitness: '2,654',
      expressfitness: '2,327',
      fitplex: '2,874'
    }
    

  },
  modules: {
      
  }
};

export default new Vuex.Store<RootState>(store);