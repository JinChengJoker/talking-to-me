//index.js
Page({
    data: {
        isWriting: true,
        messageStack: []
    },
    onReady() {
        setTimeout(() => {
            this.setData({
                isWriting: false
            })
            this.pushMessage(undefined, 'johnny', '很高兴遇见你')
        }, 2000)
    },
    pushMessage(event, person, content) {
        this.data.messageStack.push({
            person: person || 'guest',
            content: content || '我也是'
        })
        this.setData({
            messageStack: this.data.messageStack
        })
    }
})
