import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('messageboard');

},

actions: {
  saveMessageboard3(params) {
    var newMessageboard = this.store.createRecord('messageboard', params);
    newMessageboard.save();
    this.transitionTo('index');
  }
}
});
