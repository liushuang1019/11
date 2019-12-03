var list=require ('./src/mock/data.json');

module.exports={
  // 通过devserver模拟接口完成数据请求
    devServer:{
        before(app){
            app.get('/getlist',(req,res)=>{
                res.send(list)
            })
        }
    }
}