// Create a component
Vue.component('don-tab', {
  props: ['body'],
  data() {
    return {
      title: this.title
    }
  },
  template: `
     <b-tab title='this.title'><p>{{body}}</p></b-tab>
  `
})


new Vue({
  el: '#app',
  data: {
    tabs : [
      {title: 'First', body:"I'm the First tab"},
      {title: 'Second', body:"I'm the Second tab"},
      {title: 'Last', body:"I'm the Last tab"},
    ]
  },
  computed: {

  }
})