module.exports = {
    sendPlayerMessage: (player, message) => {
        player.outputChatBox(message);
    },

    sendGlobalMessage: (message) => {
        mp.players.forEach(p => {
            p.outputChatBox(message);
        });
    },

    isInRangeOf: (A,B,r) => {
        return ( ((B.x - A.x)^2) + ((B.y - A.y)^2) + ((B.z - A.z)^2) <= r^2);
    }
};