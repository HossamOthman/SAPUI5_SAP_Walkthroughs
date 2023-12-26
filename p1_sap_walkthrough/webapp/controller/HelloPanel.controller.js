sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Text",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Text, MessageToast, JSONModel, ResourceModel) {
        "use strict";

        return Controller.extend("edu.p1sapwalkthrough.controller.HelloPanel", {
            onInit: function () {
                  this.loadData()
                },
            
            loadData: function() {
                  // set data model on view
                    const oData = {
                        recipient : {
                        name : "World"
                        }
                    };
                    const oModel = new JSONModel(oData);
                    this.getView().setModel(oModel);

                    // set additional model (i18n) up
                    var i18nModel = new ResourceModel({
                        bundleName: "edu.p1sapwalkthrough.i18n.i18n",
                        supportedLocales: [""],
                        fallbackLocale: ""
                    });
                    this.getView().setModel(i18nModel, "i18n")
            },

            onShowHello: function () {
                // reads message from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloToast", [sRecipient])

                // show message
                MessageToast.show(sMsg)
            }
        });
    });
