<template>
    <div id="login">
        <input type="text" placeholder="username" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <button v-on:click="$emit('sign_in', {email:email, password:password})">Submit</button>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data: function() {
    return {
        email: '',
        password: ''
    }
  }
}
</script>