import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Route from '@ember/routing/route';

export default Route.extend(AuthenticatedRouteMixin, {
  actions: {
    deleteRecord(record) {
      if (confirm(`Tem certeza que deseja deletar o projeto "${record.get('title')}"? \nEssa ação não pode ser desfeita.`)) {
        record.destroyRecord()
        .then( ()=> {
          this.get('notifications').success(`O projeto "${record.get('title')}" foi deletado.`);
          this.transitionTo('mg-projects.index');
          return null;
        });
      }
    },
    changePublishedStatus(record, status) {
      record.published = status;
      record.save()
      .then( (r)=> {
        if (status) {
          this.get('notifications').success('Projeto publicado.');
        } else {
          this.get('notifications').success('Projeto despublicado.');
        }
        // success
        return r;
      })
      .catch( (err)=> {
        this.send('queryError', err);
      });
    },
    save(record, alias) {
      record.save()
      .then( function saveAlias(content) {
        return alias.save()
        .then( ()=> {
          return content;
        });
      })
      .then( (r)=> {
        this.get('notifications').success('Dados salvos.');
        // move scroll to top:
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        // success
        return r;
      })
      .catch( (err)=> {
        this.send('queryError', err);
        return err;
      });
    }
  }
});
