
// 主页顶部广告显示与隐藏

     $(function(){//dom树加载后就提前执行，而且代替了匿名函数自调
     
      //查找触发事件的元素
      $(".J_event a")
      .click(function(){
            $(this).parent().css("display","none")
      })

})
     


      
      $(function(){   //dom树加载后就提前执行，而且代替了匿名函数自调                                     
      var $li=$(".fsCol1>ul>li");
      //绑定li让ul显示出来
      $li.mouseover(function(){
            //找到li的孩子并且是 ul
            $(this).children("ul").show();
      })

      $li.mouseout(function () {
       $(this).children("ul").hide();
      })
    
})   



(function (){
      //01先在index.html中引入ajax.js和index.js
      //02利用ajax，向localhost:3000/index发送请求，获得数据
      $.ajax({
            url:"http://localhost:3000/index",  //向服务端发送请求
            type:"get",//请求类型
            dataType:"json" //返回值类型 
      })//.then中的函数会在发送请求结束后，自动执行
        // open(result)这里的result是ajax从后端拿到的数据
      .then(function(result){
           
      //定义变量html，准备保存三个商品的模板片段
      var html="";
      //遍历result中最后三个商品
      for(var p of result.slice(-3)){

            html+=`<div class="col-md-4 p-0 pl-2">
            <div class="card border-0 text-center">
              <img class="card-img-top" src="${p.pic}" alt="Card image cap">
              <div class="card-body p-0 pr-1 pl-1">
                <span class="d-inline-block">${p.title}</span>
                <span class="text-primary small">¥${p.price}</span>
                <a class="btn btn-sm btn-primary" href="${p.href}">查看详情</a>
              </div>
            </div>
          </div>`     
      }
 
      document.getElementById("d4").innerHTML=html
      
})       
      
})()


// 物品栏菜单


