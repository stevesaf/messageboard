import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('messageboard', params.messageboard_id);
  },
  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.messageboard;
      debugger;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      })
      this.transitionTo('question', messageboard)
    }
  }
});
