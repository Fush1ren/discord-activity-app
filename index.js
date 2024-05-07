const { Client, RichPresence } = require('discord.js-selfbot-v13');
const config = require("./config");

const client = new Client({
    checkUpdate: false,
});


client.on('ready', async() => {
    let name = "";
    let details = "";
    let state = "";
    let time = config.ACTIVITY.TYPE.PLAYING.TIME;
    let type = config.TYPE.toUpperCase();
    let largeImage = config.LARGE_IMAGE;
    let smallImage = config.SMALL_IMAGE;

    console.log(`Status : ${client.user.username} is ready!`);

    const rpc = new RichPresence()
        .setApplicationId(config.CLIENT.APP_ID)

        if(type == "LISTENING" ){
            name += config.ACTIVITY.TYPE.LISTENING.NAME;
            details += config.ACTIVITY.TYPE.LISTENING.DETAILS;
            rpc.setAssetsLargeText(config.LARGE_TEXT)
            rpc.setAssetsSmallText(config.SMALL_TEXT)
        }
        else if (type == "STREAMING"){
            name += "STREAMING";
            details += config.ACTIVITY.TYPE.STREAMING.DETAILS;
            rpc.setAssetsLargeText(config.LARGE_TEXT)
            rpc.setAssetsSmallText(config.SMALL_TEXT)
        }
        else if (type == "WATCHING"){
            name += config.ACTIVITY.TYPE.WATCHING.NAME;
            details += config.ACTIVITY.TYPE.WATCHING.DETAILS
            rpc.setAssetsLargeText(config.LARGE_TEXT)
            rpc.setAssetsSmallText(config.SMALL_TEXT)
        }
        else if (type == "PLAYING"){
            name += config.ACTIVITY.TYPE.PLAYING.NAME;
            details += config.ACTIVITY.TYPE.PLAYING.DETAILS;
            state += config.ACTIVITY.TYPE.PLAYING.STATE;
            rpc.setState(state)
            rpc.setAssetsLargeText(config.LARGE_TEXT)
            rpc.setAssetsSmallText(config.SMALL_TEXT)
        }
        else{
            return;
        }
        if(largeImage.includes("https://media.discordapp.net/")){
            let link = largeImage.replace("https://media.discordapp.net/", "mp:")
            rpc.setAssetsLargeImage(link)
        }
        else if(largeImage.includes("https://cdn.discordapp.com/")){
            let link = largeImage.replace("https://cdn.discordapp.com/", "mp:")
            rpc.setAssetsLargeImage(link)
        }
        else{
            const image = await RichPresence.getExternal(client, config.CLIENT.APP_ID, config.LARGE_IMAGE)
            rpc.setAssetsLargeImage(image[0].external_asset_path)
        }

        if(smallImage.includes("https://media.discordapp.net/")){
            let link = smallImage.replace("https://media.discordapp.net/", "mp:")
            rpc.setAssetsSmallImage(link)
        }
        else if(smallImage.includes("https://cdn.discordapp.com/")){
            let link = smallImage.replace("https://cdn.discordapp.com/", "mp:")
            rpc.setAssetsSmallImage(link)
        }
        else{
            const image = await RichPresence.getExternal(client, config.CLIENT.APP_ID, config.SMALL_IMAGE)
            rpc.setAssetsSmallImage(image[0].external_asset_path)
        }

        rpc.setType(type)
        rpc.setName(name)
        rpc.setDetails(details)
        if(time == true){
            rpc.setStartTimestamp(Date.now())
        }
        /*rpc.addButton(config.BUTTON_1.BUTTON_TEXT, config.BUTTON_1.BUTTON_LINK)
        rpc.addButton(config.BUTTON_2.BUTTON_TEXT, config.BUTTON_2.BUTTON_LINK)*/
        // client.rpc.setStatus("dnd");
        client.user.setActivity(rpc.toJSON());
});

client.login(config.CLIENT.TOKEN);