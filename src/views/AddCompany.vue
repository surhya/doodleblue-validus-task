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
               <Verticalmenu />
            </div>
            <div class="column middle" style="background-color:white;">
                
              <FormAddCompany />
                             
            </div>
           
        </div>
    </div>
</template>

<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator'


 import Verticalmenu from '@/components/common/Verticalmenu.vue'
 import FormAddCompany from '@/components/companies/FormAddCompany.vue'




@Component({
  components: {
    Verticalmenu,
     FormAddCompany
    
   
    
  },

//   computed: {
//     helloMessage: {
//       get (): string {
//         return this.$store.state.helloMessage;
//       }
//     }
//   }

 })

export default class AddCompany extends Vue {
}

</script>

<style scoped>
* {
  box-sizing: border-box;
}

.header {
  background-color: #3783F5;
  padding: 1px;
  text-align: center;

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

.topnav .icon {
  display: none;
}

.row {
  display: -webkit-flex;
  display: flex;
}

.column {
  padding: 10px;
 
}

.column.side {
    padding: 0px;
   -webkit-flex: 0.5;
   -ms-flex: 0.5;
   flex: 0.5;
   
}

.column.middle {
  -webkit-flex: 2;
  -ms-flex: 2;
  flex: 2;
}

</style>