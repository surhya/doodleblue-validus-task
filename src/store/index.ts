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
    },

    companies: [
      {
          sno: '1',
          companyName: 'Apple INC',
          taxId: 'SC1354985ABC3214',
          email: 'contact@apple.co.in',
          contactNumber: '+654 5134 6584'
      },
      {
        sno: '2',
        companyName: 'Microsoft',
        taxId: 'SC1354985ABC3546',
        email: 'mic@apple.co.in',
        contactNumber: '+654 5134 5451'
      },
      {
        sno: '3',
        companyName: 'Amazon',
        taxId: 'SC1354985ABC2288',
        email: 'amazon@apple.co.in',
        contactNumber: '+654 2589 5254'
    },
    {
      sno: '4',
      companyName: 'Facebook',
      taxId: 'SC1354985ABC2288',
      email: 'facebook@apple.co.in',
      contactNumber: '+654 2589 5254'
  },

  ],

  staff: [
    {
      id: '1',
      staffName: 'John Doe',
      employeeId: 'SAGI1569',
      email: 'john@gmail.com',
      contactNumber: '+625 9334 6584'
    },
    {
      id: '2',
      staffName: 'Doe',
      employeeId: 'SAGI1784',
      email: 'john@gmail.com',
      contactNumber: '+625 2534 6584'
    },
    {
      id: '3',
      staffName: 'John Doe',
      employeeId: 'SAGI1244',
      email: 'john@gmail.com',
      contactNumber: '+625 5134 9884'
    },
  ]
    

  },
  modules: {
      
  }
};

export default new Vuex.Store<RootState>(store);