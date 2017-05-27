var authenticationBrowser;

mp.events.add({
    "authenticationShow": () => {
        authenticationBrowser = mp.browsers.new("package://html/login.html");
        mp.game.controls.disableAllControlActions(32);
    },

    "authenticationHide": () => {
        authenticationBrowser.destroy();
        mp.game.controls.enableAllControlActions(32);
    },

    "authenticationLogin": result => {
        mp.events.callRemote("cefLogin", result);
    },

    "authenticationDisconnect": () => {
        mp.events.callRemote("cefLoginDisconnect");
    }
});