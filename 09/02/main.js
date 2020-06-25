Vue.component('amount' , {
	data() {
		return {
			amount: null,
			disabled: false
		}
	},
	template: `
		<div class="columns">
		<div class="column is-6">
			<input v-model="amount" class="input is-primary" type="number" placeholder="enter the amount" @blur="calculateTotal" :disabled="this.disabled"></input>
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

			this.$emit('total-amount-received', {input_id: this._uid,amount:totalAmount})
		}
	}
})


new Vue({
  el: '#app',
  data() {

  	return {
  		amounts: {},
  		totalAmount: 0
  	}

  },
  methods: {
  	calculateTotal(amountObj) {

  		if (this.amounts[amountObj.input_id] !== undefined) {
  			this.amounts[amountObj.input_id] = amountObj.amount
  		} else {
  			this.amounts[amountObj.input_id] = amountObj.amount
  		}

  		this.totalAmount = 0;

  		for (const key in this.amounts) {

  			if (!isNaN(this.amounts[key])) {
  				this.totalAmount += this.amounts[key]
  			} else {
  				this.totalAmount += 0
  			}
  			
  		}
  	}
  }
})