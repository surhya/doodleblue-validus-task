<template>
    <div>
        <div class="header">
            <div class="topnav" id="myTopnav">
                <img class="" src="../assets/sagicor-logo.png" alt="SAGICOR">
                <a href="" class="">ADMIN PORTAL</a>
                <a href="" style="float:right;">Logout</a>
                <a href="" style="float:right;">Admin User</a>
                
               
                
               
            </div>
           
        </div>

        <div class="row">
            <div class="column side" style="background-color:#f7f5f5;">
                <div class="vertical-menu">
                   
                    
                   
                    <a href="#" class="active"><img src="../assets/dashboard-logo.png" alt="">Dashboard</a>
                    
                    <a href="#"><img src="../assets/companies-logo.png" alt="">Companies</a>
                    <a href="#"><img src="../assets/staff-logo.png" alt="">Staff</a>
                    <a href="#"><img src="../assets/reports-logo.png" alt="">Reports</a>
                    <a href="#"><img src="../assets/membership-logo.png" alt="">Membership Plan</a>
                    <a href="#"><img src="../assets/settings-logo.png" alt="">Settings</a>
                </div>
            </div>
            <div class="column middle" style="background-color:white;">
                <h4 class="dashboard-heading">Dashboard</h4>
            </div>
           
        </div>
    </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.header {
  background-color: #3783F5;
  padding: 1px;
  text-align: center;
  /* font-size: 35px; */
}

.topnav {
  overflow: hidden;
  background-color: #3783F5;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 20px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav img {
    float: left;
    display: block;
    width: 10%;
    text-align: center;
    padding: 14px 16px;
    
    
}

/* .topnav a:hover {
  background-color: #ddd;
  color: black;
} */

.topnav .icon {
  display: none;
}


/* Container for flexboxes */
.row {
  display: -webkit-flex;
  display: flex;
}

/* Create three unequal columns that sits next to each other */
.column {
  padding: 10px;
  height: 100vh; /* Should be removed. Only for demonstration */
}

/* Left and right column */
.column.side {
    padding: 0px;
   -webkit-flex: 0.5;
   -ms-flex: 0.5;
   flex: 0.5;
   
}

/* Middle column */
.column.middle {
  -webkit-flex: 2;
  -ms-flex: 2;
  flex: 2;
}

.vertical-menu {
  width: 100%;
}

.vertical-menu a {
  background-color: #f7f5f5;
  color: black;
  display: block;
  padding: 20px;
  text-decoration: none;
  text-align: left;
}

.vertical-menu a:hover {
  background-color: #ccc;
}

.vertical-menu a.active {
  background-color: #576477;
  color: white;
}

.vertical-menu img {
    padding-right: 20px;
}

.dashboard-heading{
    text-align: left;
}
</style>