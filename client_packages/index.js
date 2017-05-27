function disconnect() {
    mp.events.callRemote("cefData", "disconnect");
}

var authenticationBrowser;

mp.events.add({
    "authenticationShow": () => {
        authenticationBrowser = mp.browsers.new("package://html/login.html");
    },

    "authenticationHide": () => {
        authenticationBrowser.destroy();
    },

    "authenticationLogin": result => {
        mp.events.callRemote("cefLogin", result);
    },

    "authenticationDisconnect": () => {
        mp.events.callRemote("cefLoginDisconnect");
    }
});