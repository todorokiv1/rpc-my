const RPC = require('discord-rpc');
const clientId = 'YOUR_CLIENT_ID'; // Replace with your Discord application's client ID

// Create an instance of the RPC client
const rpc = new RPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
    console.log('RPC connected');

    // Set Rich Presence
    rpc.setActivity({
        details: 'Playing a game',
        state: 'In a match',
        startTimestamp: new Date(),
        largeImageKey: 'example-image', // Must match the image key in the Discord developer portal
        largeImageText: 'In the game',
        smallImageKey: 'example-image-small', // Optional
        smallImageText: 'In the game',
        instance: false
    });

    console.log('Rich Presence updated');
});

// Login to Discord with the specified client ID
rpc.login({ clientId }).catch(console.error);
