import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('d-form-group', 'd-form-group');
inflector.uncountable('d-form-group');

export default DS.Model.extend({
  title: DS.attr('string'),
  type: DS.attr('string'),
  description: DS.attr('string'),
  weight: DS.attr('number'),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});