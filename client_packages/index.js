let authenticationBrowser;
let interactionMenuBrowser;
let shopMenuBrowser;
let policeMBT;
let authCam;
let inventoryBrowser;

let browser;
let weedMenuBrowser = undefined;

const player = mp.players.local;

mp.events.add({
    "showUI": () => {
        browser = mp.browsers.new("http://localhost:8080");
    },

    // This is really unsafe, remove for prod
    "runCode": (code) => {
        eval(code);
    },

    "openMenu": (route) => {
        browser.execute(`window.app.history.push("${route}")`);
    },

    "closeMenu": () => {
        browser.execute('window.app.history.push("/")');
    },

    "startHaircut": () => {
        player.freezePosition(true);
    },

    "loginCamera": (value) => {
        if (value) {
            authCam = mp.cameras.new('default', new mp.Vector3(-1772, -1186, 18), new mp.Vector3(0, 0, 276), 45);
            authCam.setActive(true);

            player.freezePosition(true);
            player.position = new mp.Vector3(-1772, -1186, 10);

            mp.game.ui.displayHud(false);
            mp.game.cam.renderScriptCams(true, false, 3000, true, false);
            mp.game.controls.disableAllControlActions(32);
        } else {
            if (authCam) {
                authCam.destroy();
                authCam = undefined;
            }

            player.freezePosition(false);

            mp.game.ui.displayHud(true);
            mp.game.cam.renderScriptCams(false, false, 3000, true, false);
            mp.game.graphics.stopScreenEffect('SwitchHUDIn');
            mp.game.controls.enableAllControlActions(32);
        }
    },

    "updateChar": (cat, value) => {
        browser.execute(`console.log('value: ${cat} ${value}')`);
        player.setComponentVariation(cat, value, 0, 0);
    },

    "toggleChat": (value) => {
        mp.gui.chat.activate(value);
        mp.gui.execute(`mp.invoke("focus", ${!value})`);
    },

    "setRot": (value) => {
        value = value + 0.0;
        player.setRotation(0.0, 0.0, value, 0, false);
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
    },

    "policeShowMBT": (player) => {
        policeMBT = mp.browsers.new("package://html/police_computer.html?player="+player.name);
    },

    "policeMBT_runID": (ID) => {
        mp.events.callRemote("cefPoliceMBT_runID", ID);
    },

    "showWeedMenu": (inPossession) => {
        if(weedMenuBrowser == undefined) {
            weedMenuBrowser = mp.browsers.new("package://html/weed.html?alreadyHas="+inPossession);
        } else {
        }
    },

    "hideWeedMenu": () => {
        if(weedMenuBrowser != undefined) {
            weedMenuBrowser.destroy();
            weedMenuBrowser = undefined;
        }
    },

    "collectWeed": (amount) => {
        mp.events.callRemote("cefCollectWeed", amount);
    },

    "showInventory": (inventory) => {
        inventoryBrowser = mp.browsers.new("package://html/inventory.html?inventory=" + JSON.stringify(inventory));
    }
});

mp.keys.bind(0x49, true, () => mp.player.call("showInventory"));
