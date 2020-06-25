Vue.component('d-tabs', {
  template: `
    <div class="is-centered">
    <div class="tabs is-centered">
        <ul>
          <li v-for="tab in tabs" :class="{'is-active' : tab.isActive}">
             <a @click="selectTab(tab)">{{tab.title}}</a>
          </li>
        </ul>
    </div>

    <div class="content">
      <slot></slot>
    </div>

    </div>
  `,
  data() {
    return {
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {

      this.tabs.forEach(tab => {

        if (tab.title !== selectedTab.title) {
          tab.isActive = false;
        } else {
          tab.isActive = true;
        }

      })
    }
  },
  mounted() {

    let noActiveTabFound = true;

    for (let i = 0 ; i < this.tabs.length ; i++ ) {
        if (this.tabs[i].isActive) {
          noActiveTabFound = false
          break
      }
    }

    if (noActiveTabFound) {
      this.tabs[0].isActive = true;
    }
  }
})


Vue.component('tab-content', {
  props: ['title'],
  data() {
    return {
      isActive: false
    }
  },
  template: `
    <div v-show="isActive == true"><slot></slot></div>
  `
})

new Vue({
  el: '#app'
})