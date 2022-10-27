sap.ui.define(
  ['sap/ui/base/ManagedObject', 'sap/ui/core/Fragment'],
  function (ManagedObject, Fragment) {
    'use strict';

    return ManagedObject.extend(
      'sap.ui.demo.walkthrough.controller.HelloDialog',
      {
        constructor: function (oView) {
          this._oView = oView;
        },
        exit: function () {
          delete this._oView;
        },
        open: function () {
          let oView = this._oView;
          if (oView.byId('helloDialog')) {
            oView.byId('helloDialog').open();
          } else {
            Fragment.load({
              controller: this,
              id: oView.getId(),
              name: 'sap.ui.demo.walkthrough.view.HelloDialog',
            }).then(function (oDialog) {
              oView.addDependent(oDialog);
              oDialog.open();
            });
          }
        },
        onCloseDialog: function () {
          this._oView.byId('helloDialog').close();
        },
      }
    );
  }
);
