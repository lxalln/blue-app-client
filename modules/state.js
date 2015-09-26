var helpers = require('../modules/helpers');

module.exports = {
    type: 'init',
    statements: [
        {
            id : helpers.generateUUID(),
            message : "I am really tired, I just want to go home",
            user : "Alex",
            timestamp: new Date(),
            emojiCount: 0,
            messageCount: 0
        },
        {
            id : helpers.generateUUID(),
            message : "This has been a really long weekend so far, people just don't get how much I miss my bed :(",
            user: "Kryszta",
            timestamp: new Date(new Date().getTime() + (10*60*1000)),
            emojiCount: 0,
            messageCount: 0
        },
        {
            id : helpers.generateUUID(),
            message : "My feet hurt",
            user: "Alex",
            timestamp: new Date(new Date().getTime() + (20*60*1000)),
            emojiCount: 0,
            messageCount: 0
        }
    ]
};
