sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast', 'sap/ui/core/Fragment'],
  function (Controller, MessageToast, Fragment) {
    'use strict';

    return Controller.extend('sap.ui.demo.walkthrough.controller.HelloPanel', {
      onShowHello: function () {
        let sRecipient = this.getView()
          .getModel()
          .getProperty('/recipient/name');
        let oBundle = this.getView().getModel('i18n').getResourceBundle();
        let sMsg = oBundle.getText('helloMessage', sRecipient);

        MessageToast.show(sMsg);
      },
      onOpenDialog: function () {
        var oView = this.getView();
        if (this.byId('helloDialog')) {
          this.byId('helloDialog').open();
        } else {
          Fragment.load({
            name: 'sap.ui.demo.walkthrough.view.HelloDialog',
            controller: this,
            id: oView.getId(),
          }).then(function (oDialog) {
            oView.addDependent(oDialog);
            oDialog.open();
          });
        }
      },
      onCloseDialog: function () {
        this.byId('helloDialog').close();
      },
    });
  }
);
