import PublicRoute from './browse_pages';
import Ember from 'ember';

export default PublicRoute.extend({
  messageBox: Ember.inject.service(),
  isAvailable: false,

  beforeModel(transition) {
    this._super(...arguments);
  },

  model(params, transition) {
    return this.store.peekRecord('item', params["id"]);
  },

  setupController(controller, model){
    controller.set('model', model);
    controller.set("previewUrl", model.get("previewImageUrl"));
    this.controllerFor('application').set('pageTitle',
      this.get('i18n').t("itemdetail.view"));
  }
});
