const data = [
    {
        id: '101',
        content: '很高兴遇见你',
        reply: {
            id: '201',
            content: '我也是',
            nextId: '102'
        }
    },
    {
        id: '102',
        content: '嗯哼？',
        reply: {
            id: '202',
            content: '能介绍一下你自己吗？',
            nextId: '103'
        }
    },
    {
        id: '103',
        content: '当然~我叫金成，现在在深圳，是一名前端开发工程师。'
    }
]

export default data