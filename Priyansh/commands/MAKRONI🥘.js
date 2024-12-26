const fs = require("fs");
module.exports.config = {
	name: "makroni",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "makroni",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("MAKRONI")==0 || event.body.indexOf("Makroni")==0 || event.body.indexOf("makroni")==0 || event.body.indexOf("#makroni")==0) {
		var msg = {
				body: "💝 YE LO BBY MAKRONI KHAO 🥘",
				attachment: 
fs.createReadStream(__dirname + `/cache/Makroni.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }