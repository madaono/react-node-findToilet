var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/';

/* GET home page. */
// data/read?type=it
router.get('/read', function(req, res, next) {
    var type = req.query.type || '';
    console.log('type', type)
    fs.readFile(PATH+ type + '.json',function(err,data){
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

module.exports = router;