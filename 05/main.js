Vue.component('donda-card', {
	props: ['title', 'body'],
	data() {
		return {
			isVisible: true
		}	
	},
	template: `
	<div class="card col-xl-6">
		<div class="card-body" v-show="isVisible">
			<h5 class="card-title">{{title}}</h5>
			<p class="card-text">{{body}}</p>
			<a href="#" class="btn btn-primary" @click="isVisible = false">Hide me</a>
		</div>
		<div class="card-body" v-show="!isVisible">
			<a href="#" class="btn btn-primary" @click="isVisible = true">Show me</a>
		</div>
	</div>
	`
})


new Vue({
	el: "#app"
})