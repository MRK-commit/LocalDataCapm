sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.demoui.controller.View1", {
            onInit: function () {

            },
            onCreate:function(oev){
            var model=this.getOwnerComponent().getModel();
            var oEntry={eid:"7676878",ename:"Kapil",city:"hjhjhj"}
            model.create("/Employee",oEntry,{
                method:"POST",
                success: function(data) {
                 alert("success");
                },
                error: function(e) {
                 alert("error");
                }
               });
            }
        });
    });
