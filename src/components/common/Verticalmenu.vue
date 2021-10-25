<template>
     <div class="vertical-menu">
        <a href="#" class="active"><img src="../../assets/dashboard-logo.png" alt="">Dashboard</a>
        <a href="#"><img src="../../assets/companies-logo.png" alt="">Companies</a>
        <a href="#"><img src="../../assets/staff-logo.png" alt="">Staff</a>
        <a href="#"><img src="../../assets/reports-logo.png" alt="">Reports</a>
        <a href="#"><img src="../../assets/membership-logo.png" alt="">Membership Plan</a>
        <a href="#"><img src="../../assets/settings-logo.png" alt="">Settings</a>
    </div>
</template>

<style scoped>
.vertical-menu {
  width: 100%;
}

.vertical-menu a {
  background-color: #f7f5f5;
  color: #555555;
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
</style>