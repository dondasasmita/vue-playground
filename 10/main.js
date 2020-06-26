window.Event = new Vue();

Vue.component('d-modal', {
	props: ['title'],
	data() {
		return {
			activate: false
		}
	},
	template: `
		<div class="column">
		 	<button class="button is-primary" @click="displayModal">{{title}}</button>
			<div class="modal" :class="{'is-active' : activate}">
			  <div class="modal-background"></div>
			  <div class="modal-card">
			    <header class="modal-card-head">
			      <p class="modal-card-title">
			      	<slot name="header"></slot>
			      </p>
			      <button class="delete" aria-label="close" @click="activate = false"></button>
			    </header>
			    <section class="modal-card-body">
			      <slot name="body"></slot>
			    </section>
			    <footer class="modal-card-foot">
			      <button class="button is-success">Save changes</button>
			      <button class="button" @click="activate = false">Cancel</button>
			    </footer>
			  </div>
			</div>
		</div>
	`,
	methods: {
		displayModal() {
			this.activate = true
		}
	},
	created() {
		Event.$on('open-modal', () =>  {
			this.activate = true
		})
	}
})

Vue.component('d-button', {
	template: 
	`
		<button class="button is-primary" @click="openModal">Display Modal</button>
	`,
	methods: {
		openModal() {
			Event.$emit('open-modal')
		}
	}
})


new Vue({
  el: '#app',
  data: {
  	players: [
  		{title: 'Superman', header: 'This is Superman Title', body: 'This is Superman Body' },
  		{title: 'Batman', header: 'This is Batman Title', body: 'This is Batman Body' }
  	]
  }
})