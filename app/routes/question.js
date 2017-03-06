import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('messageboard', params.messageboard_id);
  },
  actions: {
    update(messageboard, params) {
      Object.keys(params).forEach(function(key){
        if (params[key]!==undefined) {
          messageboard.set(key,params[key]);
        }
      });
      messageboard.save();
      this.transitionTo('question');
    },

    destroyMessageboard(messageboard) {
      messageboard.destroyRecord();
      this.transitionTo('index');
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.messageboard;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      })
      this.transitionTo('question')
    }
  }
});
