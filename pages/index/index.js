//index.js
Page({
    data: {
        messageStack: [
            {
                person: 'johnny',
                content: 'Hello World !'
            },
            {
                person: 'guest',
                content: 'Hello MiniProgram !'
            }
        ]
    },
    pushMessage() {
        this.data.messageStack.push({
            person: 'guest',
            content: 'Hi !'
        })
        this.setData({
            messageStack: this.data.messageStack
        })
    }
})
