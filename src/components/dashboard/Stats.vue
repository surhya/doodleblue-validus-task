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
                                    <p class="card-detail">6,850</p> 
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-column">
                            <div class="card">
                                  <div class="container">
                                    <p class="card-title">Active Members - Last 3 Months</p> 
                                    <div class="line"></div>
                                    <p class="card-detail">1,068</p> 
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-column">
                            <div class="card">
                                  <div class="container">
                                    <p class="card-title">Total Deactivated Members</p> 
                                    <div class="line"></div>
                                    <p class="card-detail">125</p> 
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
                                    <p class="card-detail">2,654</p> 
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-column">
                            <div class="card">
                                  <div class="container">
                                    <p class="card-title">Express Fitness</p> 
                                    <div class="line"></div>
                                    <p class="card-detail">2,327</p> 
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-column">
                            <div class="card">
                                  <div class="container">
                                    <p class="card-title">FitPlex</p> 
                                    <div class="line"></div>
                                    <p class="card-detail">2,874</p> 
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
</template>

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