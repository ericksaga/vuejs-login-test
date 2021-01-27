<template>
    <div id="register">
        <input type="text" placeholder="First Name" v-model="firstName">
        <input type="text" placeholder="Last Name" v-model="lastName">
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <input type="password" placeholder="Verify Password" v-model="verified_password">
        <input type="text" placeholder="Company" v-model="default_company">
        <button v-on:click="$emit('sign_up', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            verified_password: verified_password,
            default_company: default_company
        })">Submit</button>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data: function() {
    return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        verified_password: '',
        default_company: ''
    }
  }
}
</script>