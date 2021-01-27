<template>
    <div id="Users">
        <span>{{ user.firstName }}</span>
        <span>{{ user.lastName }}</span>
        <span>{{ user.email }}</span>
        <span>{{ user.default_company }}</span>
    </div>
</template>

<script>
export default {
  name: 'Users',
  props: {
      user:{
          firstname:String,
          lastname:String,
          email:String,
          default_company:String,
      }
  }
}
</script>