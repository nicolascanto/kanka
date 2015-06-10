function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "register";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.register = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        id: "register"
    });
    $.__views.register && $.addTopLevelView($.__views.register);
    $.__views.__alloyId9 = Ti.UI.createView({
        top: 10,
        width: "100%",
        layout: "vertical",
        id: "__alloyId9"
    });
    $.__views.register.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 10,
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createView({
        height: 100,
        width: 100,
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.imgUser = Ti.UI.createImageView({
        height: "70%",
        image: "/images/register/foto-perfil.png",
        id: "imgUser"
    });
    $.__views.__alloyId12.add($.__views.imgUser);
    $.__views.__alloyId13 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: 100,
        top: 25,
        id: "__alloyId13"
    });
    $.__views.__alloyId11.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: 30,
        top: 10,
        left: 10,
        layout: "horizontal",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        left: 5,
        width: Ti.UI.SIZE,
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.imgCamera = Ti.UI.createImageView({
        height: "70%",
        image: "/images/register/sacar-foto.png",
        id: "imgCamera"
    });
    $.__views.__alloyId15.add($.__views.imgCamera);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        color: "#000",
        left: 10,
        text: "Sacar",
        id: "__alloyId16"
    });
    $.__views.__alloyId14.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: 30,
        top: 10,
        left: 10,
        layout: "horizontal",
        id: "__alloyId17"
    });
    $.__views.__alloyId13.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        left: 5,
        width: Ti.UI.SIZE,
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.imgSelect = Ti.UI.createImageView({
        height: "70%",
        image: "/images/register/galeria.png",
        id: "imgSelect"
    });
    $.__views.__alloyId18.add($.__views.imgSelect);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        color: "#000",
        left: 10,
        text: "Seleccionar",
        id: "__alloyId19"
    });
    $.__views.__alloyId17.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        layout: "vertical",
        top: 30,
        id: "__alloyId20"
    });
    $.__views.__alloyId10.add($.__views.__alloyId20);
    $.__views.txtNombre = Ti.UI.createTextField({
        color: "#000",
        width: Titanium.UI.SIZE,
        textAlign: "center",
        id: "txtNombre",
        hintText: "NOMBRE",
        hintTextColor: "#999"
    });
    $.__views.__alloyId20.add($.__views.txtNombre);
    $.__views.txtMail = Ti.UI.createTextField({
        color: "#000",
        width: Titanium.UI.SIZE,
        textAlign: "center",
        id: "txtMail",
        hintText: "MAIL",
        hintTextColor: "#999"
    });
    $.__views.__alloyId20.add($.__views.txtMail);
    $.__views.txtPassword1 = Ti.UI.createTextField({
        passwordMask: true,
        color: "#000",
        width: Titanium.UI.SIZE,
        textAlign: "center",
        id: "txtPassword1",
        hintText: "CONTRASEÑA",
        hintTextColor: "#999"
    });
    $.__views.__alloyId20.add($.__views.txtPassword1);
    $.__views.txtPassword2 = Ti.UI.createTextField({
        passwordMask: true,
        color: "#000",
        width: Titanium.UI.SIZE,
        textAlign: "center",
        id: "txtPassword2",
        hintText: "REPITE CONTRASEÑA",
        hintTextColor: "#999"
    });
    $.__views.__alloyId20.add($.__views.txtPassword2);
    $.__views.linea = Ti.UI.createView({
        top: 15,
        backgroundColor: "#000",
        height: 5,
        width: "75%",
        right: 0,
        left: "10%",
        id: "linea"
    });
    $.__views.__alloyId20.add($.__views.linea);
    $.__views.btnRegister = Ti.UI.createButton({
        top: 20,
        width: "60%",
        backgroundColor: "#000",
        borderRadius: 15,
        color: "#fff",
        id: "btnRegister",
        title: "CREAR"
    });
    $.__views.__alloyId20.add($.__views.btnRegister);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;