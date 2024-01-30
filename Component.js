sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/m/MessageToast"],
  function (UIComponent, MessageToast) {
    "use strict";

    return UIComponent.extend("sap.f.sample.ShellBar.Component", {
      onInit() {
        MessageToast.show("Start Component");
      },
    });
  },
);
