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
        this.johnnySay('101')
    },
    guestSay() {
        let reply = this.data.reply
        if (reply) {
            this.pushMessage('guest', reply)
            setTimeout(() => {
                this.setData({
                    isWriting: true,
                    scrollTop: this.data.scrollTop + 37
                })
                this.johnnySay(reply.nextId)
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
        setTimeout(() => {
            this.pushMessage('johnny', message)
            this.setData({
                isWriting: false
            })
            this.getMsgHeight(message.id)
        }, 2000)
    },
    pushMessage(person, message) {
        this.data.messageStack.push({
            id: message.id,
            person: person,
            content: message.content
        })
        this.setData({
            messageStack: this.data.messageStack,
            reply: message.reply || null
        })
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
