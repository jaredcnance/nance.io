import DS from 'ember-data';

const {
  attr,
  hasMany
} = DS;

export default DS.Model.extend({
  url: attr(),
  title: attr(),
  createdAt: attr(),
  websiteVisits: hasMany()
});
