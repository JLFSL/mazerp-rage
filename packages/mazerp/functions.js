module.exports = {
    sendPlayerMessage: (player, message) => {
        player.outputChatBox(message);
    },

    sendGlobalMessage: (message) => {
        mp.players.forEach(p => {
            p.outputChatBox(message);
        });
    }
};