<template>
  <div class="row">
    <div class="column" style="background-color:#3783F5;">
      <img class="logo-img" src="../assets/sagicor-logo.png" alt="SAGICOR">
    </div>
    <div class="column">
        
        <div class="form-container">
            <h1 class="heading">Reset Password</h1>
            <form class="form-tag">
                <div class="form-field">
                    <input type="password" id="email" name="email" placeholder="New Password">
                </div>
                <div class="form-field">    
                     <input type="password" id="password" name="password" placeholder="Confirm New Password">
                </div>
                
                
               
                <input type="submit" value="CONTINUE">
            </form>
        </div>
    </div>
  </div>
</template>


<style scoped>
* {
  box-sizing: border-box;

}
.column {
  float: left;
  width: 50%;
  height: 100vh;
  padding: 10px;

}

/* Clear floats after the columns */
.row:after {

  content: "";
  display: table;
  clear: both;
}

.logo-img{
    position: relative;
    top: 50%;
    transform: translate(0, -50%);

}

.form-container{
    /* margin: auto;
    width: 60%;
    border: 5px solid #FFFF00;
    padding: 10px; */

    position: absolute;
    top: 40%;
    width: 45%;
    transform: translate(0, -50%);
    /* border: 5px solid #FFFF00; */
    padding: 10px;

}

.heading{
 text-align: left;
 padding: 0px 80px 0px 90px;
 
}

.form-tag{
    padding-top: 10px;
}

.form-field{
    padding-top: 15px;
}

input[type=text], input[type=password] {
  width: 70%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 0px;
  box-sizing: border-box;
}

input[type=text], input[type=password]:focus {
 outline: none;
}


input[type=submit] {
  width: 70%;
  background-color: #3783F5;
  color: white;
  padding: 14px 20px;
  margin: 50px 0 0 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #3783F5;
}

.form-checkbox {
  float: left;
  width: 50%;
  padding-left: 50px;
 
}

a {
    text-decoration: none;
    color: #3783F5;
    font-weight: 600;
}

</style>