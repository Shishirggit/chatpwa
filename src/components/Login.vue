<template><div> 
<div>
  <label for="email">Email..</label>
  <b-form-input v-model="email" type="text" placeholder="Enter your email" />
</div>
<div>
  <label for="password">Password..</label>
  <b-form-input v-model="password" type="password" placeholder="Enter your email" />    
</div>
 <b-button @click="login()">Login user</b-button>
 <div style="color:red" v-html="error"/>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      this.error = null
    }
  }
}
</script>

<style>

</style>
