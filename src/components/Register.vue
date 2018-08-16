<template>
  <form name="registerForm" autocomplete="off">
   <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text" id="email" v-model="email">
    <label class="mdl-textfield__label" for="email">Email..</label>
  </div>
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">    
    <input class="mdl-textfield__input" type="password" id="password" v-model="password">
    <label class="mdl-textfield__label" for="email">Password...</label>
  </div>  
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="button" id="button" @click="register()">Register user</button>
    <label for="authMessage" v-show="authenticationMessage">{{authenticationMessage}}</label>
    <div style="color:red" v-html="error"/>
  </form>
</template>

<script>

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      authenticationMessage: '',
      error: null
    }
  },
  methods: {
    async register () {
      this.error = null
      this.$root.auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(function (user) {
          alert('account is created')
        })
    }
  }
}
</script>

<style>

</style>
