<template>
  <div id="app">
    <div v-if="!session"> 
      <Login v-if="loginScreen" v-on:sign_in="login"/>
      <Register v-else v-on:sign_up="register"/>
      <button v-on:click="loginScreen=!loginScreen">{{loginScreen?"Register":"Login"}}</button>
    </div>
    <button v-if="session" v-on:click="getUsers">See all users</button>
    <Users 
      v-for="user in allUsers"
      v-bind:key="user.id"
      v.bind:user="user"
    ></Users>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Users from './components/Users.vue'
export default {
  name: 'App',
  components: {
    Login,
    Register,
    Users
  },
  data: function(){
    return {
      session: '',
      loginScreen: true,
      allUsers: [],
      login: function(loginData) {
        fetch("https://apidev.kanvas.dev/v1/auth", {
          method:"post",
          body:loginData,
          mode:"no-cors"
        }).then((response) => {
          if(response.status == 200) {
            response.json().then((sessionData) => {
              this.session = sessionData;
              this.getUsers();
            })
          } else {
            console.log(response)
          }
        }).catch((error) => {
          console.log(error);
        })
      },
      register: function(userData) {
        fetch("https://apidev.kanvas.dev/v1/users", {
          method:"post",
          body: userData,
          mode: 'no-cors'
        }).then((response) => {
          if(response == 200) {
            response.json().then((userInfo) => {
              this.session = userInfo.session;
              this.getUsers();
            })
          } else {
            console.log(response)
          }
        }).catch((error) => {
          console.log(error);
        })
      },
      getUsers: function() {
        fetch("https://apidev.kanvas.dev/v1/users", {
          method:"get",
          mode:'no-cors',
          headers:{
            Authorization: this.session.token
          }
        }).then((response) => {
          if(response.status == 200) {
            response.json().then((usersData) => {
              this.allUsers = usersData;
            })
          } else {
            console.log(response)
          }
        }).catch((error) => {
          console.log(error);
        })
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
