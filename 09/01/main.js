window.Event = new Vue()

Vue.component('amount' , {
	props: ['enabled'],
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

			Event.$emit('total-amount-received', totalAmount)
		}
	},
	mounted() {

		if (this.enabled !== undefined) {
			this.disabled = !this.enabled
		}
		
	}
})


Vue.component('gst', {
	data() {
		return {
			gstAmount: 0
		}
	},
	template: `
		<h6>Your GST : {{this.gstAmount}}</h6>
	`,
	created() {
		Event.$on('total-amount-received', (amount) => {

			this.gstAmount = (amount * 0.07).toFixed(2);

			let totalBill = parseFloat(amount) + parseFloat(this.gstAmount)

			Event.$emit('gst-calculated',{ gst: this.gstAmount, totalBill: totalBill } )

		})
	}

})


new Vue({
  el: '#app',
  data() {
  	return {
  		totalAmount: 0,
  		showGst : false
  	}
  },
  created() {
		Event.$on('gst-calculated', (amountObj) => {

			if (amountObj.gst > 0 || !isNaN(amountObj.gst)) {
				this.showGst = true
				this.totalAmount = amountObj.totalBill
			} else {
				this.showGst = false
				this.totalAmount = 0
			}

		})
	}
})