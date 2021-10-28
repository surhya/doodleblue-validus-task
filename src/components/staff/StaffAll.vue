<template>
    <div>
        <h4 class="dashboard-heading">Staff</h4>
        <h4 class="dashboard-heading">Sagicor Staff Details</h4>

        <div class="row">
            <div class="column serach">
                <input type="text" placeholder="search staffs">
               
            </div>
            <div class="column sort">
                <div class="row">
                    <div class="sub-column">
                        <!-- <p class="sort-text">Sort by</p> -->
                    </div>
                    
                    <div class="sub-column">
                         <!-- <select>
                            <option value="0">Disabled Companies</option>
                            <option value="1">Disabled</option>
                            
                        </select> -->
                    </div>
                    
                    <div class="sub-column">
                        <input type="button" value="Add Staff">
                    </div>
                </div>
                
            </div>
        </div>

        <div class="table-class">
            <table>
                <tr>
                    <th class="s-align">S.No</th>
                    <th>Staff Name</th>
                    <th>Employee ID</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th class="s-align"></th>
                    <th></th>
                </tr>
                <tr v-for="staff in staffdata" :key="staff.id">
                    <td class="s-align">{{staff.id}}</td>
                    <td>{{staff.staffName}}</td>
                    <td>{{staff.employeeId}}</td>
                    <td>{{staff.email}}</td>
                    <td>{{staff.contactNumber}}</td>
                    <td class="s-align"></td>
                    <td><input class="sub-button"></td>
                </tr>
                <!-- <tr>
                    <td class="s-align">2</td>
                    <td>Apple inc</td>
                    <td>SC1354985ABC3214</td>
                    <td>contact@apple.co.in</td>
                    <td>+654 5134 6584</td>
                    <td class="s-align"><input class="action-button" type="submit" value="Disable"></td>
                    <td><input class="sub-button"></td>
                </tr>
                <tr>
                    <td class="s-align">3</td>
                    <td>Apple inc</td>
                    <td>SC1354985ABC3214</td>
                    <td>contact@apple.co.in</td>
                    <td>+654 5134 6584</td>
                    <td class="s-align"><input class="action-button" type="submit" value="Disable"></td>
                    <td><input class="sub-button"></td>
                </tr> -->
                
            </table>
        </div>
            
                    

               
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'


@Component({
    computed: {
   
   staffdata: {
      get (): string {
        return this.$store.state.staff;
      }
    },

  
  }

})

export default class CompaniesAll extends Vue {
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

* {
  box-sizing: border-box;
}


.column {
  float: left;
  padding: 10px;
 
}

.serach{
 width: 35%;
}

.sort{
width: 65%;
text-align: right;
padding: 0px 10px 10px 10px;
}


.row:after {
  content: "";
  display: table;
  clear: both;
}

.sub-column {
  width: 33.33%;
  float: left;
  padding: 10px;
 
}


input[type=text] {
  width: 100%;
  /* padding: 12px 20px; */
  margin: 0px;
  box-sizing: border-box;
  border: 1px solid #C7C7C7;
  border-radius: 4px;

  background-image: url('../../assets/serach-icon.png');
  background-position: 330px ; 
  background-repeat: no-repeat;
  padding: 10px 40px 12px 10px;
}

input[type=text]:focus{
    outline: none;
}

input[type=button] {
  width: 100%;
  background: #3783F5;
  color: #fff;
  width: 155px;
  height: 45px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
}

select {
  width: 100%;
  padding: 10px 10px;
  margin: 0px;
  box-sizing: border-box;
  border: 1px solid #C7C7C7;
  border-radius: 4px;
}

select:focus{
    outline: none;
}

.sort-text{
    margin: 0px;
    padding-top: 12px;
    color: #555555;
    font-size: 16px;
}

.table-class{
    padding: 10px;
}

table {
  border-collapse: collapse;
  border: 1px solid #DCDCDC;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
  height: 70px;
}

tr:nth-child(odd){background-color: #FBFBFB}

th {
  background-color: #FBFBFB;
  color: #000;
  font-size: 13px;
  border-bottom: 1px solid #DCDCDC;
}

td {
    font-size: 14px;
}

.s-align{
    text-align: center;
}

.action-button{
  
  background: #fff;
  color: red;
  width: 100px;
  height: 35px;
  border-radius: 8px;
  border: 1px solid red;
  cursor: pointer;
  text-align: center;
}

.sub-button{
    width: 50px;
    background: none;
    /* border-radius: 50px; */
    border: none;
    background-image: url('../../assets/dot-button.png');
    background-position: 10px ; 
    background-repeat: no-repeat;
    padding: 10px 40px 12px 10px;
    cursor: pointer;
   
    }

.sub-button:focus{
outline: none;
}

</style>