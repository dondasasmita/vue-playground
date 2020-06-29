<template>
  <div class="container">
    <div id="app">
      <div class="columns is-centered mt-10">
        <div class="column is-half">
          <img src="http://localhost/~donda/playground/vue/12/dist/logo.png">
        </div>
        <div class="column is-half">
          <h1>{{ msg }}</h1>
        </div>
      </div>
      <amount></amount>
      
    </div>
  </div>

</template>

<script>
  import Amount from './Amount.vue'

  export default {
    name: 'app',
    components: { Amount },
    data () {
      return {
        msg: 'Welcome to My GST Calculator'
      }
    }
  }
</script>

<style type="text/css">

body {
  padding-top: 40px;
}
</style>
