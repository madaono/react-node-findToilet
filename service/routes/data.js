var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/';

/*数据读取模块*/
// data/read?type=it
router.get('/read', function(req, res, next) {
    var type = req.query.type || '';
    console.log('type', type)
    fs.readFile(PATH + type + '.json',function(err,data){
        if (err){
            return res.send({
                status :0,
                info: '读取文件错误'+err
            });
        }
        var COUNT = 50;
        var obg =[];
        try{
            obj = JSON.parse(data.toString());
        }catch(e){
            obj=[];
        }
        if(obj.length > COUNT){
            obj = obj.slice(0, COUNT);
        }
        return res.send({
            status:1,
            data:obj
        })
    })
});

/* 数据存储模块 */ 
router.post('/write', function(req, res, next){
    var type = req.body.type || '' ;
    var url = req.body.url  || '';
    var title = req.body.title || '';
    var img = req.body.img || '';
    if(!type || !url || !title || !img){
        return res.send({
            status:0,
            info:'提交的信息不全'
        })
    }else{
        fs.readFile(PATH + type + '.json', function(err, data){
            if (err){
                return res.send({
                    status :0,
                    info: '读取文件错误'+err
                });
            }
            var arr = JSON.parse(data.toString());
            var obj = {
                img: img,
                url: url,
                title: title,
                id: generateUUID(),
                time: new Date()
            };
            arr.splice(0,0,obj);
            var newData = JSON.stringify(arr);
            fs.writeFile(PATH + type + '.json',newData, function(err, data){
                if(err){
                    return res.send({
                        status:0,
                        info:'failed'+err
                    })
                }
                return res.send({
                    status:1,
                    info:'successed'
                })
            })
        })
    }
});

// 阅读模块写入接口
router.post('/write_config', function(req,res,next){
    if(!req.session.user){
        return res.send({
          status: 0,
          info: '未鉴权认证'
        });
    };
    // 后期增加对数据的验证
    // 防xss攻击 npm install xss 
    // require('xss')
    // var str = xss(name)
    var data = req.body.data;
    var obj,newData;
    try{
        obj = JSON.parse(data);
        newData = JSON.stringify(obj);
    }catch(e){
        onj='';
        newData=[];
    }
    fs.writeFile(PATH+'config.json',newData, function(e){
        if(e){
            return res.send({
                status:0,
                info:'failed' + e
            })
        }
        return res.send({
            status: 1,
            info: obj
        })
    })
   
});
// login in 
router.post('/login', function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;
    console.log(req.body)
    // todo 验证
    // xss处理，判空
    // 密码加密 md5(password + '随机字符串') 可多次加密
    if(username === 'admin' && password === '123456'){
        req.session.user = {
            username: username
        };
        return res.send({
            status:1,
            info:'login success'
        })
    }
    return res.send({
        status:0,
        info: '登录失败'
    });
})



// 全局唯一标识符（GUID，Globally Unique Identifier）也称作 UUID(Universally Unique IDentifier) 。在生成一些节点的时候需要通过唯一ID来标记
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};

module.exports = router;