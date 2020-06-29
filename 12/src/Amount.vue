<template>
  <div>
    <div class="columns">
      <div class="column is-6">
        <input v-model="amount" class="input is-primary" type="number" placeholder="enter the amount" @keyup="calculateTotal"></input>
      </div>
      <div class="column is-6">
        <div class="tags has-addons">
          <span class="tag">Powered by</span>
          <span class="tag is-primary">Bulma</span>
        </div>
      </div>
    </div>
    <div class="columns" v-show="this.gst > 0">
      <div class="column is-centered">
        <h5>Total GST is <span class="tag is-success">{{this.gst}}</span></h5>
        <h5>Total Bill is <span class="tag is-success">{{this.bill}}</span></h5>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'amount',
    data() {
      return {
        amount: null,
        gst: null,
        bill: null
      }
    },
    methods: {
      calculateTotal() {
        let gst = parseFloat(this.amount) * 0.07

        this.gst = gst.toFixed(2)

        this.bill = parseFloat(this.amount) + parseFloat(this.gst)
    }
  }
}
</script>
