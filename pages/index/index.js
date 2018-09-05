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
            this.getMsgHeight(reply.id)
            this.setData({
                reply: null
            })
            setTimeout(() => {
                this.johnnySay(reply.nextId)
            }, 1000)
        }
    },
    johnnySay(id) {
        let line
        for (let i = 0; i < chatData.length; i++) {
            if (chatData[i].id === id) {
                line = chatData[i]
                break
            }
        }
        let msgList = line.msgList
        for (let m = 0; m < msgList.length; m++) {
            setTimeout(() => {
                this.setData({
                    isWriting: true,
                    scrollTop: this.data.scrollTop + 37
                })
                setTimeout(() => {
                    this.setData({
                        isWriting: false
                    })
                    this.pushMessage('johnny', msgList[m])
                    this.getMsgHeight(msgList[m].id)
                    if (m === msgList.length-1) {
                        this.setData({
                            reply: line.reply || null
                        })
                    }
                }, 2000)
            }, m*3000)
        }
    },
    pushMessage(person, message) {
        this.data.messageStack.push({
            id: message.id,
            person: person,
            content: message.content
        })
        this.setData({
            messageStack: this.data.messageStack
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
