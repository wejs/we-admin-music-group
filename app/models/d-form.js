import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('d-form', 'd-form');
inflector.uncountable('d-form');

export default DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  subject: DS.attr('string'),
  formName: DS.attr('string'),
  replyTo: DS.attr('string'),
  to: DS.attr('string'),
  type: DS.attr('string'),
  published: DS.attr('boolean'),
  publishedAt: DS.attr('date'),
  setAlias: DS.attr(),
  redirectToOnSuccess: DS.attr('string'),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  creator: DS.belongsTo('user', {
    async: true
  }),
  fields: DS.hasMany('d-form-field', {
    async: true,
    inverse:'form'
  }),
  answers: DS.hasMany('d-form-answer', {
    async: true,
    inverse:'form'
  })
});