const fs = require("fs");
module.exports.config = {
	name: "prem aa gya",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Prem babu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Prem",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("radhe Krishna")==0 || event.body.indexOf("radha")==0 || event.body.indexOf("Radhe")==0 || event.body.indexOf("राधे कृष्ण")==0) {
		var msg = {
				body: "💞💫राधे कृष्ण 💞💫",
				attachment: fs.createReadStream(__dirname + `/AADI/radheji.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
