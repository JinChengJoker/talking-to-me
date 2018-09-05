const data = [{
    id: '101',
    msgList: [{
        id: '201',
        content: '嗨~'
    }, {
        id: '202',
        content: '很高兴遇见你'
    }],
    reply: {
        id: '301',
        content: '我也是',
        nextId: '102'
    }
}, {
    id: '102',
    msgList: [{
        id: '203',
        content: '嗯哼？'
    }],
    reply: {
        id: '302',
        content: '你能介绍一下自己吗？',
        nextId: '103'
    }
}, {
    id: '103',
    msgList: [{
        id: '204',
        content: '当然可以~'
    }, {
        id: '205',
        content: '我叫金成'
    }, {
        id: '206',
        content: '今年 25 岁'
    }, {
        id: '207',
        content: '现在在深圳，是一名前端开发工程师'
    }]
}]

export default data