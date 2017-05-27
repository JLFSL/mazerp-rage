function disconnect() {
    mp.events.callRemote("cefData", "disconnect");
}

mp.events.add({
    "authenticationShow": () => {
        var authenticationBrowser = mp.browsers.new("package://html/login.html");

        mp.events.callRemote("cefLoginData", "clientsided call to server");
    },

    "authenticationDisconnect": () => {
        mp.events.callRemote("cefLoginDisconnect");
    }
});