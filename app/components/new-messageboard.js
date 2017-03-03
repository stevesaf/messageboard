import Ember from 'ember';

export default Ember.Component.extend({
  addNewMessageboard: false,
  actions: {
    messageboardFormShow() {
      this.set('addNewMessageboard', true);
    },

    saveMessageboard1() {
      var params = {
        question: this.get('question'),
        notes: this.get('notes'),
        author: this.get('author')
      };
      this.set('addNewMessageboard', false);
      this.sendAction('saveMessageboard2', params);
    }
  }
});
