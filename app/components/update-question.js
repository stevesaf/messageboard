import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(messageboard) {
      var params = {
        question: this.get('question'),
        notes: this.get('notes'),
        author: this.get('author')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', messageboard, params);
    }
  }
});
