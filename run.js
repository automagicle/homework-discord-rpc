const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });

const clientId = '1555027753546420285'; 

function setActivity() {
    client.setActivity({
        details: "i'm doing homework", // first line
        state: "no, i'm 𝙥𝙡𝙖𝙮𝙞𝙣𝙜 homework", // second line
        startTimestamp: new Date(), // time elapsed
        largeImageKey: 'https://static2.klipy.com/ii/71b2873e478b9d8d0482ea3ec777ba7f/6b/8e/lVCBUPa2.gif',   // Name of asset uploaded in portal, or a direct URL
        largeImageText: 'mm hmm',  // Text when hovering over the large image
        //smallImageKey: '', // this is the little circle icon in the corner of the main image
        //smallImageText: '',
        buttons: [ // up to 2
            {label: 'github code', url: 'https://github.com/automagicle/homework-discord-rpc'},
        ]
    }).catch(console.error);
}

client.on('ready', () => {
    console.log('connected to discord');
    setActivity();
});

// login to the local discord client
client.login({ clientId }).catch(console.error);