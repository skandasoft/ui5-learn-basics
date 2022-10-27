sap.ui.define(
  ['sap/ui/core/mvc/XMLView', 'sap/ui/core/ComponentContainer'],
  function (XMLView, ComponentContainer) {
    'use strict';
    // new Text({
    //   text: 'Hello UI5',
    // }).placeAt('content');
    // XMLView.create({
    //   viewName: 'sap.ui.demo.walkthrough.view.App',
    // }).then(function (oView) {
    //   oView.placeAt('content');
    // });
    new ComponentContainer({
      name: 'sap.ui.demo.walkthrough',
      settings: {
        id: 'walkthrough',
      },
      async: true,
    }).placeAt('content');
  }
);
