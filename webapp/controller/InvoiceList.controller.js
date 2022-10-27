sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../utils/formatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
  ],
  function (Controller, JSONModel, formatter, Filter, FilterOperator) {
    'use strict';

    return Controller.extend('sap.ui.demo.walkthrough.controller.InvoiceList', {
      formatter: formatter,
      onInit: function () {
        var oViewModel = new JSONModel({
          currency: 'EUR',
        });
        this.getView().setModel(oViewModel, 'view');
      },
      onFilterInvoices: function (oEvent) {
        var aFilter = [];
        var sQuery = oEvent.getParameter('query');
        if (sQuery) {
          aFilter.push(
            new Filter('ProductName', FilterOperator.Contains, sQuery)
          );
        }
        let oList = this.byId('invoiceList');
        let oBinding = oList.getBinding('items');
        oBinding.filter(aFilter);
      },
    });
  }
);
