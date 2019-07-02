import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('d-form-value', 'd-form-value');
inflector.uncountable('d-form-value');

export default DS.Model.extend({
  name: DS.attr('string'),
  value: DS.attr('string'),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  field: DS.belongsTo('d-form-field', {
    async: true
  }),
  answer: DS.belongsTo('d-form-answer', {
    async: true,
    inverse:'values'
  })
});