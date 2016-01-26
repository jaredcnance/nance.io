import DS from 'ember-data';

const {
  attr,
  belongsTo
} = DS;

export default DS.Model.extend({
  createdAt: attr(),
  updatedAt: attr(),
  website: belongsTo()
});
