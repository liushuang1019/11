import Mock from 'mockjs';

var data=Mock.mock({
    'list|4':[
        {
            'navlist|+1':['全部任务','进行中的任务','强行终止的任务','已完成的任务'],
            'data|5':[
                {
                    "id|+1":0,
                    "tit":'@ctitle',
                    "name":"@cname",
                    'starttime':"@date",
                    'endtime':"@date"
                }
            ]
        }
    ]
})

export default data;