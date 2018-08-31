//index.js
Page({
    data: {
        messageStack: [
            {
                person: 'johnny',
                text: 'Hello World !'
            },
            {
                person: 'guest',
                text: 'Hello MiniProgram !'
            }
        ]
    },
    pushMessage() {
        this.data.messageStack.push({
            person: 'guest',
            text: 'Hi !'
        })
        this.setData({
            messageStack: this.data.messageStack
        })
    }
})
