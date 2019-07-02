import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('d-form-field', 'd-form-field');
inflector.uncountable('d-form-field');

export default DS.Model.extend({
  label: DS.attr('string'),
  placeholder: DS.attr('string'),
  help: DS.attr('string'),
  type: DS.attr('string'),
  defaultValue: DS.attr('string'),
  allowNull: DS.attr('boolean', {
    defaultValue: 'true'
  }),
  weight: DS.attr('number'),
  validate: DS.attr('string'),
  fieldOptions: DS.attr('string'),
  formFieldAttributes: DS.attr('string'),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  fields: DS.hasMany('d-form-field', {
    async: true,
    inverse:'group'
  }),
  group: DS.belongsTo('d-form-field', {
    async: true,
    inverse:'fields'
  }),
  form: DS.belongsTo('d-form', {
    async: true,
    inverse:'fields'
  })
});