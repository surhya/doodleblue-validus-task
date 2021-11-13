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
  ],

  report: [
    {
      id: '1',
      memberFirstName: 'John',
      memberLastName: 'Doe',
      memberNumber: '32145',
      membershipPlan: '365 by EF',
      membershipPrice: '$ 4000',
      rebatePayable: '$ 400'
    },
    {
      id: '2',
      memberFirstName: 'Albert',
      memberLastName: 'Doe',
      memberNumber: '32985',
      membershipPlan: '365 by EF',
      membershipPrice: '$ 5000',
      rebatePayable: '$ 300'
    },
    {
      id: '3',
      memberFirstName: 'John',
      memberLastName: 'Doe',
      memberNumber: '32174',
      membershipPlan: '365 by EF',
      membershipPrice: '$ 6200',
      rebatePayable: '$ 800'
    },
  ],

  membership: [
    {
      id: '1',
      planName: 'Platinum',
      status: 'Active',
      billingAmount: '$575,000',
      totalTier: 'I',
      maximumMembers: '100',
      feePerMember: '$5,750',
      suggestedSubsidy: '$1500',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: '2',
      planName: 'GOLD',
      status: 'Active',
      billingAmount: '$425,000',
      totalTier: 'I',
      maximumMembers: '100',
      feePerMember: '$4,520',
      suggestedSubsidy: '$1500',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },

  ],

  staffDetail: 
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      streetAddress: '1 Apple way Park',
      town: 'Calofornia, US',
      email: 'contact@apple.co.in',
      emerContact: 'Albert',
      emerphone: '+ 71 569822',
      emerRelation: 'Father',
      gender: 'male',
      dob: '21-01-2021',
      empid: 'SAGI12345',
      phoneNumber: '+32 5465 666',
      planChosen: 'gold',
      payment: 'netbanking',
    },
      

  },
  modules: {
      
  }
};

export default new Vuex.Store<RootState>(store);