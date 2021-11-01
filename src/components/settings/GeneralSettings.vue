<template>
    <div>
        <h4 class="dashboard-heading">Settings</h4>
        <h4 class="dashboard-heading">General Settings</h4>

        <h3 class="heading">Change Password</h3>

        <div class="row">
            <div class="column">
                <p class="password-heading">Current Password</p>
                <input type="password" placeholder="Enter here">
            </div>
            <div class="column">
                <p class="password-heading">New Password</p>
                <input type="password" placeholder="Enter here">
            </div>
        </div>

        <div class="row">
            <div class="column">
                <p class="password-heading">Confirm New Password</p>
                <input type="password" placeholder="Enter here">
            </div>
        </div>

        <div class="endline"></div>

        <div class="button-container">
            <input type="submit" value="SAVE CHANGES">
        </div>
                    
                    

               
    </div>
</template>

<script lang="ts">
// import { Component, Vue } from 'vue-property-decorator'


// @Component({
//     computed: {
   
//    staffdata: {
//       get (): string {
//         return this.$store.state.staff;
//       }
//     },

  
//   }

// })

// export default class CompaniesAll extends Vue {
// }

</script>

<style scoped>
.dashboard-heading{
    font-weight: normal;
    text-align: left;
    font-size: 16px;
    color: #555555;
    padding-left: 15px;
}

.heading{
    padding-left: 15px;
    text-align: left;
}

.password-heading{
    
    font-size: 16px;
    color: #000000;
}

.endline{
    margin-top: 50px;
    border-bottom: 2px solid #ECECEC;
    /* margin-right: 150px; */
}

input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 0px;
  box-sizing: border-box;
  background: #F9F9F9;
}

input[type=password]:focus {
 outline: none;
}

.button-container{
    text-align: left;
    padding-left: 15px;
}


input[type=submit] {
  width: 15%;
  background-color: #3783F5;
  color: white;
  padding: 14px 20px;
  margin: 50px 0 0 0;
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
  text-align: left;
  padding-left: 15px;
}  

.row:after {
  content: "";
  display: table;
  clear: both;
  
}


</style>