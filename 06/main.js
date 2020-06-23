Vue.component('donda-modal', {
	template: `
	<div class="modal" tabindex="-1" role="dialog" :style="{'display' : 'block'}">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Modal title</h5>
					<button type="button" class="close" @click="$emit('close')">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<p>Modal body text goes here.</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
				</div>
			</div>
		</div>
	</div>
	`
})

new Vue({
	el: "#app",
	data: {
		showModal : false
	}
})