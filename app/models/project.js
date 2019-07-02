import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('project', 'project');
inflector.uncountable('project');

export default DS.Model.extend({
  published: DS.attr('boolean'),
  highlighted: DS.attr('number'),
  title: DS.attr('string'),
  about: DS.attr('string'),
  body: DS.attr('string'),
  publishedAt: DS.attr('date'),
  categoryItem: DS.attr(),
  attachment: DS.attr('array'),
  featuredImage: DS.attr('array'),
  images: DS.attr('array'),
  tags: DS.attr(),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  setAlias: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  creator: DS.belongsTo('user', {
    async: true
  })
});