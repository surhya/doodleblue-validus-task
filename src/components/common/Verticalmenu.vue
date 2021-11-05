<template>
<div class="vertical-menu">
        <a href="/dashboard" class="active">
        <div class="row">
            <div class="column img-align">
               <img src="../../assets/dashboard-logo.png" alt="">
            </div>
            <div class="column text-al">
               <p>Dashboard</p>
            </div>
        </div>
       </a>
        <a href="/companies">
        <div class="row">
           
            <div class="column img-align">
               <img src="../../assets/companies-logo.png" alt="">
            </div>
            <div class="column text-al">
               <p>Companies</p>
            </div>
        </div>
        </a>
        <a href="/staff">
        <div class="row">
            <div class="column img-align">
               <img src="../../assets/staff-logo.png" alt="">
            </div>
            <div class="column text-al">
               <p>Staff</p>
            </div>
        </div>
        </a>
        <a href="/reports">
        <div class="row">
            <div class="column img-align">
               <img src="../../assets/reports-logo.png" alt="">
            </div>
            <div class="column text-al">
               <p>Reports</p>
            </div>
        </div>
        </a>
        <a href="/memberships">
        <div class="row">
            <div class="column img-align">
               <img src="../../assets/membership-logo.png" alt="">
            </div>
            <div class="column text-al">
               <p>Membership Plan</p>
            </div>
        </div>
        </a>
        <a href="/settings">
        <div class="row">
            <div class="column img-align">
               <img src="../../assets/settings-logo.png" alt="">
            </div>
            <div class="column text-al">
               <p>Settings</p>
            </div>
        </div>
        </a>

</div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}


.vertical-menu {
  width: 100%;
  
}

.vertical-menu a {
  background-color: #f7f5f5;
  color: #555555;
  display: block;
  text-decoration: none;
  
}

.vertical-menu a:hover {
  background-color: #ccc;
}

.vertical-menu a.active {
  background-color: #576477;
  color: white;
}

.column {
  float: left;
  width: 70%;
  padding: 10px;
  height: 70px;
  
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.img-align{
    width: 30%;
    padding-top: 22px;
    
}

.text-al{
    text-align: left;
}
</style>