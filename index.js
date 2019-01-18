const COPY_SUCCESS = 'copied!';

function styleWithHash(word) {
  if (word[0] !== '#') {
    return `#${word}`;
  }
  return word;
}

new Vue({
  el: '#app',
  data: {
    notes: [{title: 'General', hashtags: [
        '#technology', 'CSS', 'flexbox', 'WebDesign', 'CSS', 'flexbox'
      ]},
      {title: 'Programming', hashtags: [
        '#technology', 'CSS', 'flexbox', 'WebDesign'
      ]},
    ],
    isClosed: true,
    hashTitle: 'Hashtag Manager',
    count: 0,
    duplicatesCount: 0,
    hashDuplicates: [],
    hashArray: [],
    hashText: '',
    copiedMessage: '',
  },
  methods: {
    toggleNav() {
      this.isClosed = !this.isClosed
    },
    submit() {
      this.createHashArray();
      this.countHash();
      this.checkDuplicate();
      this.styleTextarea();
    },
    createHashArray() {
      this.hashArray = this.hashText.split(/\s+/);
    },
    countHash() {
      if(!this.hashText) {
        this.count = 0;
        return;
      }

      this.count = this.hashArray.length;
    },
    checkDuplicate() {
      const duplicates = this.hashArray
      .filter((item, index, array) => array.indexOf(item) !== index);
      const unique = [...new Set(duplicates)];

      this.hashDuplicates = unique;
      this.duplicatesCount = duplicates.length;
    },
    removeDuplicates() {
      const filterHash = [...new Set(this.hashArray)];

      this.hashArray = filterHash;
      this.hashText = filterHash.join(' ');
      this.duplicatesCount = 0;
      this.countHash();
    },
    reset() {
      this.duplicatesCount = 0;
      this.count = 0;
      this.hashText = '';
      this.hashDuplicates = [];
      this.hashArray = [];
    },
    copyHash() {
      if(!this.hashText) {
        return
      }

      this.$refs.text.select();
      document.execCommand('copy');
      this.copiedMessage = COPY_SUCCESS;

      setTimeout(() => {
        this.copiedMessage = '';
      }, 2000);
    },
    styleTextarea() {
      const styleHash = this.hashArray.map(word => styleWithHash(word));
      this.hashArray = styleHash;
      this.hashText = styleHash.join(' ');
    },
    clearHash() {
      const deleteHash = confirm('Remove Hashtags?');

      if(deleteHash) {
        this.reset();
      }
    }
  },
})
