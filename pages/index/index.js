//index.js
import chatData from './dialog.js'

Page({
    data: {
        isWriting: true,
        messageStack: [],
        nextId: '',
        scrollTop: 0
    },
    onReady() {
        setTimeout(() => {
            this.data.messageStack.push({
                person: chatData[0].person,
                content: chatData[0].content
            })
            this.setData({
                isWriting: false,
                messageStack: this.data.messageStack,
                nextId: chatData[0].next
            })
        }, 2000)
    },
    pushMessage(event, person, content) {
        let message
        let nextId = event.currentTarget.dataset.nextId
        if (nextId) {
            for (let i = 0; i < chatData.length; i++) {
                if (chatData[i].id === nextId) {
                    message = chatData[i]
                    break
                }
            }
            this.data.messageStack.push({
                person: message.person,
                content: message.content
            })
            this.setData({
                messageStack: this.data.messageStack,
                nextId: message.next || ''
            })
            this.getMsgHeight()
        }
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
