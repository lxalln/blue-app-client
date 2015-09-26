module.exports = {
    type: 'init',
    statements: [
        {
            Id : generateUUID(),
            Message : "Test statement A",
            User : "user1",
            Timestamp: new Date()
        },
        {
            Id : generateUUID(),
            Message : "Test statement B",
            User: "user2",
            Timestamp: new Date(new Date().getTime() + (20*60*1000))
        }
    ]
};
