new Vue({
  el: '#app',
  data: {
    isClosed: true,
    hello: 'hello there',
    hashTitle: 'Code Tidbits',
    hashText: '#technology #css #flexbox',
    notes: [
      {title: 'Code Tidbits', hashtags: [
        '#technology', 'CSS', 'flexbox', 'WebDesign', 'CSS', 'flexbox']},
      {title: 'Web Basics', hashtags: ['#technology', 'CSS', 'flexbox', 'WebDesign']},
      {title: 'JS Algorithm', hashtags: ['#technology', 'CSS', 'flexbox', 'WebDesign']},
    ],
    duplicates: [
      'Technology',
      'CSS',
      'Flexbox',
      'Web Design'
    ]
  },
  methods: {
    toggleNav() {
      this.isClosed = !this.isClosed
    }
  },
})
