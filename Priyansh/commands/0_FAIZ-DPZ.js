const fs = require("fs");
module.exports.config = {
  name: "Faiz",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "PREM BABU", 
  description: "Just Respond",
  usePrefix: true,
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("faiz") ||
     react.includes("FAIZ") || react.includes("Faiz") || react.includes("FAIz") ||
react.includes("ll 輪͙͙͟͟͞͞⃝͙ 𓆣𒄬 𓆩⃝𝐅ᴀ͜͡ɪᴢ 𝐑ᴅ͜͡x𓆪𓆥†⃝⃞⸙ »ﮩ‣𓆩๏̬̬̬̬̬̬̬̬̬̬𓆪 ") ||
react.includes("ll 輪͙͙͟͟͞͞⃝͙ 𓆣𒄬 𓆩⃝𝐅ᴀ͜͡ɪᴢ 𝐑ᴅ͜͡x𓆪𓆥†⃝⃞⸙")) {
    var msg = {
        body: `Y LO FAIZ BABU A GYAA ♥️🙂`,attachment: fs.createReadStream(__dirname + `/noprefix/FAIZ-DPZ.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }