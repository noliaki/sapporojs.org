Sapporojs.SearchView=Ember.View.extend({elementId:"search-form",tagName:"form",submit:function(){var e=this.get("controller.controllers.query.content");if(!e)return!1;var t=this.get("controller");return t.set("showModal",!0),!1}}),Sapporojs.SearchTextFieldView=Ember.TextField.extend({name:"query",classNames:["search-textfield"],autocomplete:"off",autocorrect:"off",autocapitalize:"off",attributeBindings:["autocomplete","autocorrect","autocapitalize"]}),Sapporojs.SearchResultsView=Ember.View.extend({elementId:"search-result",templateName:"search_results",updateModal:function(){this.get("controller.showModal")?this.$().fadeIn():this.$().fadeOut()},showModalDidChange:Ember.observer(function(){this.updateModal()},"controller.showModal")}),Sapporojs.SearchResultTextView=Ember.View.extend({tagName:"span",templateName:"search_result_text",classNames:["search-result-text"],resultText:Ember.computed(function(){var e=this.get("controller.matchedCount");return 0>=e?"":1===e?"result":"results"}).property("controller.matchedCount")}),Sapporojs.ModalBgView=Ember.View.extend({elementId:"modal-background",click:function(){return this.get("controller").set("showModal",!1),!1}});