<template>
    <div>
        
        <div class="row">
            <div class="column">
                <h4 class="dashboard-heading">Membership Plan</h4>
                <h4 class="dashboard-heading">All Membership Plan</h4>
            </div>
            <div class="column">
                <input class="add-button" type="button" value="Add Plan">
            </div>
        </div>

        <div class="row">
            <div class="plan-column">
                <div class="card">
                     <div class="row">
                        <div class="card-column">
                            <p>Platinum</p>
                        </div>
                        <div class="card-column-status">
                            <p class="status">Active</p>
                        </div>
                        <div class="card-column-status">
                            <input class="sub-button">
                        </div>
                     </div>
                    
                     <div class="line"></div>

                     <div class="row">
                         <div class="price-column">
                             <p class="price-text">$575,000</p>
                         </div>
                         <div class="cycle-column">
                             <p class="cycle-text">Total Monthly Billing</p>
                         </div>
                     </div>

                     <div class="row">
                         <div class="detail-colum">
                             <div class="row">
                                 <div class="detail-colum-sub-head">
                                     <p class="detail-text-head">Total Tier</p>
                                     <p class="detail-text-head">Maximum members</p>
                                     <p class="detail-text-head">Description</p>
                                     
                                 </div>
                                 <div class="detail-colum-sub-info">
                                     <p class="detail-text-info">I</p>
                                     <p class="detail-text-info">100</p>
                                 </div>
                             </div>
                         </div>
                          <div class="detail-colum-right">
                             <div class="row">
                                 <div class="detail-colum-sub-head">
                                     <p class="detail-text-head">Fee Per Member</p>
                                     <p class="detail-text-head">Suggested Subsidy</p>
                                     
                                 </div>
                                 <div class="detail-colum-sub-info">
                                     <p class="detail-text-info">$5,750</p>
                                     <p class="detail-text-info">$1500</p>
                                 </div>
                             </div>
                         </div>
                      
                     </div>
                     <div class="desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
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
   
//    staffdata: {
//       get (): string {
//         return this.$store.state.staff;
//       }
//     },

  
  }

})

export default class MembershipsAll extends Vue {
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

.add-button {
  width: 30%;
  background-color: #3783F5;
  color: white;
  padding: 14px 20px;
  margin: 20px 0 0 350px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}


.column {
  float: left;
  width: 50%;
  padding: 10px;
  
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.plan-column {
  float: left;
  width: 100%;
  padding: 10px;
  
}

.card{
    border: 1px solid #ECECEC;
}

.card-column{
  float: left;
  width: 80%;
  padding: 10px;
}

.card-column-status{
  float: left;
  width: 10%;
  padding: 10px;
}

.card-column p {
    text-align: left;
    padding-left: 15px;
}

.status {
    color: #3783F5;
}

.sub-button{
    width: 50px;
    background: none;
    /* border-radius: 50px; */
    border: none;
    background-image: url('../../assets/dot-button.png');
    background-position: 10px ; 
    background-repeat: no-repeat;
    padding: 20px 40px 12px 10px;
    cursor: pointer;
   
}

.sub-button:focus{
    outline: none;
}

.line{
    border-bottom: 1px solid #ECECEC;
    margin-right: 20px;
    margin-left: 20px;
}

.price-column{
    float: left;
    width: 11%;
    padding: 10px 10px 0px 10px;
   
}

.cycle-column{
    float: left;
    width: 20%;
    padding: 10px 10px 0px 10px;
   
}

.price-text{
    text-align: left;
    color: #081F65;
    font-weight: 600;
    font-size: 32px;
    margin: 0px 0px 15px 0px;
    padding-left: 9px;

}

.cycle-text {
    color: #8A8A8A;
    font-size: 15px;
}

.detail-colum{
    float: left;
    width: 38%;
    padding: 0px 10px 0px 10px;
}

.detail-colum-right{
    float: left;
    width: 50%;
    padding: 0px 10px 0px 10px;
}

.detail-text-head {
    text-align: left;
    color: #8A8A8A;
}

.detail-text-info {
    text-align: left;
    color: #424242;
}

.detail-colum-sub-head{
    float: left;
    width: 45%;
    padding: 0px 10px 0px 10px;
}

.detail-colum-sub-info{
    float: left;
    width: 10%;
    padding: 0px 10px 0px 10px;
}

.desc p {
    margin-top: 0px;
    text-align: left;
    font-size: 15px;
    color: #424242;
    padding-left: 20px;
;
}

</style>