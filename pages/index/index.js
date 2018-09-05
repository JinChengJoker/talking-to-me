//index.js
import chatData from './dialog.js'

Page({
    data: {
        isWriting: true,
        messageStack: [],
        reply: null,
        scrollTop: 0
    },
    onReady() {
        setTimeout(() => {
            this.johnnySay('101')
        }, 2000)
    },
    guestSay() {
        let reply = this.data.reply
        if (reply) {
            this.data.messageStack.push({
                id: reply.id,
                person: 'guest',
                content: reply.content
            })
            this.setData({
                messageStack: this.data.messageStack,
                reply: null
            })
            setTimeout(() => {
                this.setData({
                    isWriting: true,
                    scrollTop: this.data.scrollTop + 37
                })
                setTimeout(() => {
                    this.johnnySay(reply.nextId)
                }, 2000)
            }, 1000)
            this.getMsgHeight(reply.id)
        }
    },
    johnnySay(id) {
        let message
        for (let i = 0; i < chatData.length; i++) {
            if (chatData[i].id === id) {
                message = chatData[i]
                break
            }
        }
        this.data.messageStack.push({
            id: message.id,
            person: 'johnny',
            content: message.content
        })
        this.setData({
            isWriting: false,
            messageStack: this.data.messageStack,
            reply: message.reply || null
        })
        this.getMsgHeight(message.id)
    },
    getMsgHeight(msgId) {
        let id = '#msg' + msgId
        var query = wx.createSelectorQuery()
        query.select(id).boundingClientRect()
        query.exec((rect) => {
            this.scrollTo(rect[0].height)
        })
    },
    scrollTo(h) {
        this.setData({
            scrollTop: this.data.scrollTop + h
        })
    }
})
