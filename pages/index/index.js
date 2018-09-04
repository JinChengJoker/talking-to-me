//index.js
Page({
    data: {
        isWriting: true,
        messageStack: [],
        scrollTop: 0
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
        this.getMsgHeight()
    },
    scrollTo(h) {
        this.setData({
            scrollTop: this.data.scrollTop + h
        })
    },
    getMsgHeight() {
        let id = '#msg' + this.data.messageStack.length
        var query = wx.createSelectorQuery()
        query.select(id).boundingClientRect()
        query.exec((rect) => {
            this.scrollTo(rect[0].height)
        })
    }
})
