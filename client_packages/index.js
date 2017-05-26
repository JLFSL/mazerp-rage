mp.events.add({
    "authenticationShow": () => {
        var authenticationBrowser = mp.browsers.new("package://html/login.html");

        mp.events.callRemote("cefData", "clientsided call to server");
    }
});