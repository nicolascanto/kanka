function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function register() {
        var register = Alloy.createController("register").getView();
        register.open();
    }
    function login() {
        alert("Abrir login!");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createView({
        top: 10,
        width: "100%",
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
        width: "100%",
        height: "50",
        layout: "vertical",
        top: 5,
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "95%",
        top: 0,
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: 50,
        height: "100%",
        top: 0,
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.imgUser = Ti.UI.createImageView({
        height: "50%",
        image: "/images/login/usuario.png",
        id: "imgUser"
    });
    $.__views.__alloyId4.add($.__views.imgUser);
    $.__views.txtUser = Ti.UI.createTextField({
        color: "#000",
        width: Titanium.UI.SIZE,
        id: "txtUser",
        hintText: "USUARIO",
        hintTextColor: "#999"
    });
    $.__views.__alloyId3.add($.__views.txtUser);
    $.__views.__alloyId5 = Ti.UI.createView({
        width: "100%",
        height: "50",
        layout: "vertical",
        top: 5,
        id: "__alloyId5"
    });
    $.__views.__alloyId1.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "95%",
        top: 0,
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createView({
        width: 50,
        height: "100%",
        top: 0,
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.imgPass = Ti.UI.createImageView({
        height: "50%",
        image: "/images/login/lock.png",
        id: "imgPass"
    });
    $.__views.__alloyId7.add($.__views.imgPass);
    $.__views.txtPass = Ti.UI.createTextField({
        color: "#000",
        width: Titanium.UI.SIZE,
        passwordMask: true,
        id: "txtPass",
        hintText: "CONTRASEÑA",
        hintTextColor: "#999"
    });
    $.__views.__alloyId6.add($.__views.txtPass);
    $.__views.linea = Ti.UI.createView({
        top: 15,
        backgroundColor: "#000",
        height: 5,
        width: "75%",
        right: 0,
        left: "10%",
        id: "linea"
    });
    $.__views.__alloyId1.add($.__views.linea);
    $.__views.__alloyId8 = Ti.UI.createView({
        top: 10,
        left: 0,
        height: 200,
        layout: "vertical",
        id: "__alloyId8"
    });
    $.__views.__alloyId1.add($.__views.__alloyId8);
    $.__views.btnLogin = Ti.UI.createButton({
        top: 50,
        width: "60%",
        backgroundColor: "#000",
        borderRadius: 15,
        color: "#fff",
        title: "INICIAR SESION",
        id: "btnLogin"
    });
    $.__views.__alloyId8.add($.__views.btnLogin);
    login ? $.__views.btnLogin.addEventListener("click", login) : __defers["$.__views.btnLogin!click!login"] = true;
    $.__views.btnRegister = Ti.UI.createButton({
        top: 15,
        width: "60%",
        backgroundColor: "#fff",
        borderRadius: 15,
        color: "#000",
        borderWidth: 1.5,
        borderColor: "#000",
        title: "CREAR CUENTA",
        id: "btnRegister"
    });
    $.__views.__alloyId8.add($.__views.btnRegister);
    register ? $.__views.btnRegister.addEventListener("click", register) : __defers["$.__views.btnRegister!click!register"] = true;
    $.__views.lblOlvidoPass = Ti.UI.createLabel({
        color: "#000",
        top: 15,
        id: "lblOlvidoPass",
        text: "¿Olvidaste tu contraseña?"
    });
    $.__views.__alloyId8.add($.__views.lblOlvidoPass);
    $.__views.viewSocial = Ti.UI.createView({
        top: 80,
        left: 0,
        width: "100%",
        height: 100,
        id: "viewSocial"
    });
    $.__views.__alloyId1.add($.__views.viewSocial);
    $.__views.imgFacebook = Ti.UI.createImageView({
        top: 0,
        left: "33%",
        height: "50%",
        width: 50,
        image: "/images/social/facebook-off.png",
        id: "imgFacebook"
    });
    $.__views.viewSocial.add($.__views.imgFacebook);
    $.__views.imgInstagram = Ti.UI.createImageView({
        top: 0,
        right: "33%",
        height: "50%",
        width: 50,
        image: "/images/social/instagram-off.png",
        id: "imgInstagram"
    });
    $.__views.viewSocial.add($.__views.imgInstagram);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.btnLogin!click!login"] && $.__views.btnLogin.addEventListener("click", login);
    __defers["$.__views.btnRegister!click!register"] && $.__views.btnRegister.addEventListener("click", register);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;