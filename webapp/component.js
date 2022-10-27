sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
    './controller/HelloDialog',
  ],
  function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
    'use strict';

    return UIComponent.extend('sap.ui.demo.walkthrough.Component', {
      metadata: {
        manifest: 'json',
        // rootView: {
        //   viewName: 'sap.ui.demo.walkthrough.view.App',
        //   type: 'XML',
        //   async: true,
        //   id: 'app',
        // },
      },

      init: function () {
        UIComponent.prototype.init.apply(this, arguments);
        var oData = {
          recipient: {
            name: 'World',
          },
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);

        // set i18n model
        // var i18nModel = new ResourceModel({
        //   bundleName: 'sap.ui.demo.walkthrough.i18n.i18n',
        //   supportedLocales: [''],
        //   fallBackLocale: '',
        // });
        // this.setModel(i18nModel, 'i18n');

        this._helloDialog = new HelloDialog(this.getRootControl());
      },
      openHelloDialog: function () {
        this._helloDialog.open();
      },
      exit: function () {
        this._helloDialog.close();
        delete this._helloDialog;
      },
    });
  }
);
