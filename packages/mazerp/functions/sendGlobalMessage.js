module.exports = sendGlobalMessage = (text) => {
    mp.players.forEach(p => {
        p.outputChatBox(text);
    });
};