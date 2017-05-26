mp.events.add({
    "authenticationShow": () => {
        var authenticationBrowser = mp.browsers.new("package://html/index.html");
    }
});