Vue.component('total-amount' , {
	data() {
		return {
			amount: null
		}
	},
	template: `
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
	`,
	methods: {
		calculateTotal() {
			let totalAmount = parseFloat(this.amount)
			this.$emit('total-amount-received', totalAmount)
		}

	}
})


new Vue({
  el: '#app',
  data() {

  	return {
  		gstAmount: 0
  	}

  },
  methods: {
  	calculateGst(value) {

  		if (value > 0 || value !== null) {
  			let gst = value * 0.07
  			this.gstAmount = gst.toFixed(2)
  		}
  		
  	}
  }
})