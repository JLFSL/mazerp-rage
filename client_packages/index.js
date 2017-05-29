let authenticationBrowser;
let interactionMenuBrowser;
let shopMenuBrowser;

mp.events.add({
    "authenticationShow": () => {
        authenticationBrowser = mp.browsers.new("package://html/login.html");
        mp.game.controls.disableAllControlActions(32);
    },

    "authenticationHide": () => {
        if(authenticationBrowser)
            authenticationBrowser.destroy();
            
        mp.game.controls.enableAllControlActions(32);
    },

    "authenticationLogin": result => {
        mp.events.callRemote("cefLogin", result);
    },

    "authenticationDisconnect": () => {
        mp.events.callRemote("cefLoginDisconnect");
    },

    "interactionMenuShow": () => {
        interactionMenuBrowser = mp.browsers.new("package://html/action_menu.html");
    },
    "checkWallet": () => {
        mp.events.callRemote("cefCheckWallet");
        if(interactionMenuBrowser)
            interactionMenuBrowser.destroy();
    },

    "shopMenuShow": () => {
        shopMenuBrowser = mp.browsers.new("package://html/shop.html");
    },

    "shopBuyItem": (item, name, amount, price) => {
        mp.events.callRemote("cefBuyItem", item, name, amount, price);
    },

    "shopBuyItems": (itemArray, price) => {
        mp.events.callRemote("cefBuyItems", itemArray, price);
    }
});