import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('d-form-answer', 'd-form-answer');
inflector.uncountable('d-form-answer');

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  vCache: DS.attr(),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  creator: DS.belongsTo('user', {
    async: true
  }),
  values: DS.hasMany('d-form-value', {
    async: true,
    inverse:'answer'
  }),
  form: DS.belongsTo('d-form', {
    async: true,
    inverse:'answers'
  })
});