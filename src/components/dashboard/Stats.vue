<template>
    <div>
            <h4 class="dashboard-heading">Dashboard</h4>
                <h4 class="dashboard-heading">Overall Members Statistics</h4>
                    <div class="dashboard-row">
                        <div class="dashboard-column">
                            <div class="card">
                                  <div class="container">
                                    <p class="card-title">Total Active Members</p> 
                                    <div class="line"></div>
                                    <p class="card-detail">{{totalMember}}</p> 
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-column">
                            <div class="card">
                                  <div class="container">
                                    <p class="card-title">Active Members - Last 3 Months</p> 
                                    <div class="line"></div>
                                    <p class="card-detail">{{activeMember}}</p> 
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-column">
                            <div class="card">
                                  <div class="container">
                                    <p class="card-title">Total Deactivated Members</p> 
                                    <div class="line"></div>
                                    <p class="card-detail">{{deactiveMember}}</p> 
                                </div>
                            </div>
                        </div>
                    </div>

                <h4 class="dashboard-heading-second">Members Per Gym Type</h4>
                    <div class="dashboard-row">
                        <div class="dashboard-column">
                            <div class="card">
                                  <div class="container">
                                    <p class="card-title">365 Fitness</p> 
                                    <div class="line"></div>
                                    <p class="card-detail">{{fitnessType}}</p> 
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-column">
                            <div class="card">
                                  <div class="container">
                                    <p class="card-title">Express Fitness</p> 
                                    <div class="line"></div>
                                    <p class="card-detail">{{expressFitness}}</p> 
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-column">
                            <div class="card">
                                  <div class="container">
                                    <p class="card-title">FitPlex</p> 
                                    <div class="line"></div>
                                    <p class="card-detail">{{fitPlex}}</p> 
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'


@Component({
    computed: {
   
   helloMessage: {
      get (): string {
        return this.$store.state.helloMessage;
      }
    },

    totalMember: {
     get (): string {
        return this.$store.state.memberstats.totalmember;
      }
    },

    activeMember: {
     get (): string {
        return this.$store.state.memberstats.activemember;
      }
    },

    deactiveMember: {
     get (): string {
        return this.$store.state.memberstats.deactivemember;
      }
    },

    fitnessType: {
     get (): string {
        return this.$store.state.membergymtype.fitness;
      }
    },

     expressFitness: {
     get (): string {
        return this.$store.state.membergymtype.expressfitness;
      }
    },

     fitPlex: {
     get (): string {
        return this.$store.state.membergymtype.fitplex;
      }
    }

  }

})

export default class Stats extends Vue {
}

</script>

<style scoped>
.dashboard-heading{
    font-weight: normal;
    text-align: left;
    font-size: 16px;
    color: #555555;
    padding-left: 15px;
}

.dashboard-column {
  float: left;
  width: 31%;
  padding: 10px;
  /* height: 300px;  */
}


.dashboard-row:after {
  content: "";
  display: table;
  clear: both;
}

.card {
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
  border: 1px solid #ECECEC;
  transition: 0.3s;
  width: 100%;
  border-radius: 5px;
}

.card-title {
    text-align: left;
    font-size: 16px;
    color: #424242;
}

.card-detail{
text-align: left;
color: #081F65;
font-weight: 600;
font-size: 32px;
margin: 15px 0px 15px 0px;
}

/* .card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
} */

.container {
  padding: 2px 16px;
}

.line{
    border-bottom: 1px solid #ECECEC;
    margin-right: 150px;
}

.dashboard-heading-second{
    font-weight: normal;
    text-align: left;
    font-size: 16px;
    color: #555555;
    padding-left: 15px;
    margin-top: 50px;
}
</style>