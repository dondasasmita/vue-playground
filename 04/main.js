Vue.component('task',{
	props: ['task'],
	methods: {
		toggleChecked(task) {
			return task.completed = !task.completed
		}
	},
	template: `
		<div>
			<li>
				<input class="form-check-input" type="checkbox" :checked="this.task.completed" @change="toggleChecked(task)">
				<label>{{this.task.description}}</label>
			</li>
		</div>`
})


Vue.component('list-title', {
	props: ['title'],
	template: '<h2>{{this.title}}</h2>'
})

new Vue({
	el: "#app",
	data: {
			tasks: [
			{description: 'Clean room', completed: false},
			{description: 'Do homework', completed: false},
			{description: 'Shower', completed: true}
		]
	},
	computed: {
		completedTasks() {
			return this.tasks.filter( task => task.completed )
		},
		incompleteTasks() {
			return this.tasks.filter( task => !task.completed)
		}
	}
})