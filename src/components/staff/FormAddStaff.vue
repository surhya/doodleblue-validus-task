<template>
<div>
    <div class="nav-class">
        <a class="nav-button" href="/staff"><img class="nav-img" src="../../assets/left-arrow-icon.png" alt="">Staff</a>
    </div>

    <div>
        <p class="heading">Add Staff Details</p>
    </div>

    <div class="row">
        <div class="column">
            <p class="label">First Name</p>
            <input class="plan-input" type="text" placeholder="Enter here">
        </div>
        <div class="column">
             <p class="label">Last Name</p>
            <input class="plan-input" type="text" placeholder="Enter here">
        </div>
    </div>

    <div class="row">
        <div class="column">
            <p class="label">Phone</p>
            <input class="plan-input" type="text" placeholder="Enter here">
        </div>
        <div class="column">
             <p class="label">Email</p>
            <input class="plan-input" type="text" placeholder="Enter here">
        </div>
    </div>

    <div class="row">
        <div class="column">
            <p class="label">Street Address</p>
            <input class="plan-input" type="text" placeholder="Enter here">
        </div>
        <div class="column">
             <p class="label">Town</p>
            <input class="plan-input" type="text" placeholder="Enter here">
        </div>
    </div>

    <div class="row">
        <div class="column">
            <p class="label">Emergency Contact Person Name</p>
            <input class="plan-input" type="text" placeholder="Enter here">
        </div>
        <div class="column">
             <p class="label">Emergency Contact Person Number</p>
            <input class="plan-input" type="text" placeholder="Enter here">
        </div>
    </div>

    <div class="row">
        <div class="column">
            <p class="label">Emergency Contact Person Relationship</p>
            <input class="plan-input" type="text" placeholder="Enter here">
        </div>
        <div class="column">
             <p class="label">Gender</p>
            <input class="plan-input" type="text" placeholder="Enter here">
        </div>
    </div>

    <div class="row">
        <div class="column">
            <p class="label">Date of Birth</p>
            <input class="plan-input" type="text" placeholder="Enter here">
        </div>
        <div class="column">
             <p class="label">Employee ID</p>
            <input class="plan-input" type="text" placeholder="Enter here">
        </div>
    </div>


    <div class="line"></div>

    <div class="row">
        <div class="button-column">
            <input class="cancel-button" type="button" value="CANCEL">
        </div>
        <div class="button-column">
            <input class="save-button" type="button" value="SAVE">
        </div>
    </div>

</div>
</template>

<style scoped>
.nav-class {
    text-align: left;
    margin: 20px 0px 20px 0px;
}

.nav-button {
text-decoration: none;
color:#8A8A8A;

}

.nav-img {
margin-right: 10px;
}

.heading {
    text-align: left;
    font-size: 17px;
    font-weight: 600;
}

* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 50%;
  padding: 10px;
 text-align: left;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.label {
 font-size: 14px;
 font-weight: 600;
}

.plan-input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 0px;
  box-sizing: border-box;
  background: #F9F9F9;
}


.plan-input:focus {
    outline: none;
}

.line{
    border-bottom: 1px solid #ECECEC;
    margin: 30px 20px 0px 20px;
}

.button-column{
    float: left;
    width: 20%;
    padding: 10px;
    text-align: left;
}

.cancel-button{
    width: 100%;
    background-color: #E1E1E1;
    color: #000;
    padding: 14px 20px;
    margin: 20px 0 0 0px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.save-button {
    width: 100%;
    background-color: #3783F5;
    color: white;
    padding: 14px 20px;
    margin: 20px 0 0 0px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

</style>