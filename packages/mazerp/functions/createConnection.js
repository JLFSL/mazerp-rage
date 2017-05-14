module.exports = createConnection = () => {
    console.log("MySQL: Attempting to connect...");

    var connection = mysql.createConnection({
        host     : 'dev.five-multiplayer.net',
        user     : 'admin_default',
        password : 'AjrdF1vHtBtyGZ6G',
        database : 'admin_default',

        connectTimeout: 120000 // timeout after 2 minutes.
    });

    connection.connect(function(err) {
        if (err) {
            console.error('MySQL: Failed to connect - ' + err.stack);
            return;
        }
        console.log('MySQL: Successfully connected! Thread: ' + connection.threadId);
    });
};