sap.ui.define(
  ["sap/m/MessageToast", "sap/ui/core/mvc/Controller"],
  function (MessageToast, Controller) {
    "use strict";

    return Controller.extend("sap.f.sample.ShellBar.controller.ShellBar", {
      onInit() {
        MessageToast.show("Start Controller");
      },
      OnHomeIconPressed: function (oEvent) {
        MessageToast.show("Home icon pressed Controller");
      },
    });
  },
);
