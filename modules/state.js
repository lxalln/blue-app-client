var helpers = require('../modules/helpers');

module.exports = {
    type: 'init',
    statements: [
        {
            id : helpers.generateUUID(),
            message : "Test statement A",
            user : "user1",
            timestamp: new Date(),
            emojiCount: 0,
            messagecount: 0
        },
        {
            id : helpers.generateUUID(),
            message : "Test statement B",
            user: "user2",
            timestamp: new Date(new Date().getTime() + (10*60*1000)),
            emojiCount: 0,
            messageCount: 0
        },
        {
            id : helpers.generateUUID(),
            message : "Test statement C",
            user: "user1",
            timestamp: new Date(new Date().getTime() + (20*60*1000)),
            emojiCount: 0,
            messageCount: 0
        }
    ]
};
