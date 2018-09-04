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
        if(this.data.reply) {
            let content = this.data.reply.content
            let nextId = this.data.reply.nextId
            this.data.messageStack.push({
                person: 'guest',
                content: content
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
                    this.johnnySay(nextId)
                }, 2000)
            }, 1000)
            this.getMsgHeight()
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
            person: 'johnny',
            content: message.content
        })
        this.setData({
            isWriting: false,
            messageStack: this.data.messageStack,
            reply: message.reply
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
