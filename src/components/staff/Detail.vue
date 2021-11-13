<template>
<div>
    <div class="nav-class">
        <a class="nav-button" href="/staff"><img class="nav-img" src="../../assets/left-arrow-icon.png" alt="">Staff</a>
    </div>

    <div>
        <p class="heading">Staff Details</p>
    </div>

    <div class="card-container">

        <div class="row">
            <div class="column-left">
                <h2 class="staff-name">John Doe</h2>
                 <p class="staff-id">SAGI12345</p>
            </div>
            <div class="column-right">
                <input class="sub-button">
            </div>
        </div>

        <div class="tab-container">
            <h4 class="tab-title">Employee Details</h4>
        </div>

        <div class="heading-separator"></div>

        <div class="detail-container">
            <h3>General</h3>
            <div class="row">
                <div class="detail-column-left">
                    <p class="title">First Name</p>
                </div>
                <div class="detail-column-right">
                    <p class="title">{{staff.firstName}}</p>
                </div>
            </div>

            <div class="row">
                <div class="detail-column-left">
                    <p class="title">Last Name</p>
                </div>
                <div class="detail-column-right">
                    <p class="title">{{staff.lastName}}</p>
                </div>
            </div>

            <div class="row">
                <div class="detail-column-left">
                    <p class="title">Street Address</p>
                </div>
                <div class="detail-column-right">
                    <p class="title">John</p>
                </div>
            </div>

            <div class="row">
                <div class="detail-column-left">
                    <p class="title">Town</p>
                </div>
                <div class="detail-column-right">
                    <p class="title">John</p>
                </div>
            </div>

            <div class="row">
                <div class="detail-column-left">
                    <p class="title">Email</p>
                </div>
                <div class="detail-column-right">
                    <p class="title">John</p>
                </div>
            </div>

            <div class="row">
                <div class="detail-column-left">
                    <p class="title">Emergency contact Person</p>
                </div>
                <div class="detail-column-right">
                    <p class="title">John</p>
                </div>
            </div>

            <div class="row">
                <div class="detail-column-left">
                    <p class="title">Emergency contact Phone Number</p>
                </div>
                <div class="detail-column-right">
                    <p class="title">John</p>
                </div>
            </div>

            <div class="row">
                <div class="detail-column-left">
                    <p class="title">Emergency contact Relationship</p>
                </div>
                <div class="detail-column-right">
                    <p class="title">John</p>
                </div>
            </div>

            <div class="row">
                <div class="detail-column-left">
                    <p class="title">Gender</p>
                </div>
                <div class="detail-column-right">
                    <p class="title">John</p>
                </div>
            </div>

            <div class="row">
                <div class="detail-column-left">
                    <p class="title">Date of Birth</p>
                </div>
                <div class="detail-column-right">
                    <p class="title">John</p>
                </div>
            </div>

            <div class="row">
                <div class="detail-column-left">
                    <p class="title">Employee ID</p>
                </div>
                <div class="detail-column-right">
                    <p class="title">John</p>
                </div>
            </div>

            <div class="row">
                <div class="detail-column-left">
                    <p class="title">Phone Number</p>
                </div>
                <div class="detail-column-right">
                    <p class="title">John</p>
                </div>
            </div>

            <div class="row">
                <div class="detail-column-left">
                    <p class="title">Plan Choosen</p>
                </div>
                <div class="detail-column-right">
                    <p class="title">John</p>
                </div>
            </div>

            <div class="row">
                <div class="detail-column-left">
                    <p class="title">Payment Mode</p>
                </div>
                <div class="detail-column-right">
                    <p class="title">John</p>
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
   
   staff: {
      get (): string {
        return this.$store.state.staffDetail;
      }
    },

    

    

  }

})

export default class Detail extends Vue {
}

</script>

<style scoped>
.nav-class {
    text-align: left;
    margin: 20px 0px 20px 0px;
}

.nav-button {
text-decoration: none;
color:#8A8A8A;

}

.heading {
    text-align: left;
    font-size: 17px;
    font-weight: 600;
}

.card-container {
    border: 1px solid #C8C8C8;
    border-radius: 5px;
    padding: 20px;
}

.staff-name {
    text-align: left;
}

.staff-id {
    text-align: left;
    color: #555555;
}

* {
  box-sizing: border-box;
}

.column-left {
  float: left;
  width: 80%;
  padding: 20px;

}

.column-right {
  float: right;
  width: 20%;
  padding: 30px 0px 0px 0px;
  text-align: right;

}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.sub-button{
    width: 50px;
    background: none;
    border: none;
    background-image: url('../../assets/dot-button.png');
    background-position: 10px ;
    background-repeat: no-repeat;
    padding: 10px 40px 12px 10px;
    cursor: pointer;
}
.sub-button:focus {
    outline: none;
}

.tab-container {
    border-bottom: 2px solid #3783F5;
    margin-right: 80%; 
}

.tab-title {
    padding-left: 30px;
    color: #3783F5;
    text-align: left;
}

.heading-separator {
    border-bottom: 1px solid #ECECEC;
    width: 100%;
}

.detail-container {
    padding: 20px;
}

.detail-container h3 {
    text-align: left;
}

.detail-column-left {
    float: left;
    width: 30%;
    text-align: left;
    /* padding: 20px; */
}

.detail-column-right {
    float: left;
    width: 70%;
    text-align: left;
}

</style>