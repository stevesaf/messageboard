import DS from 'ember-data';

export default DS.Model.extend({
replier: DS.attr(),
answer: DS.attr(),
messageboard: DS.belongsTo('messageboard', {async: true})
});
