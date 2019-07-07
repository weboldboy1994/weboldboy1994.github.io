//这一一份费劲心血 才写完的dom轮播js代码  ！！！！！！！！
(function(){
    
      // 获取最外边div 
      var box=document.getElementById("box");
       //获取相框
       var screen = box.children[0];
       //获取相框的宽度
       var imgWidth = screen.offsetWidth;
       //获取ul
       var ulObj = screen.children[0];
       //获取ul中的所有的li
       var list = ulObj.children;
       //获取ol  龙波指示点
       var olObj =box.children[2];
       //左右指示器
       var arr = document.getElementById("arr")
      
      var index=0;
      //  创建轮播指示点，根据图片的个数
      for(var i=0;i<list.length-1;i++){
            // 创建li标签,动态加入到ol中
            var liObj=document.createElement("li");
             //在每个ol中的li标签上添加一个自定义属性,存储索引值
             liObj.setAttribute("index", i);

            olObj.appendChild(liObj)
            // liObj.innerHTML=(i+1)      
            //绑定鼠标进入事件
            liObj.onmouseover=function(){
                  //先取出所有其他li的背景颜色
                  for (var j = 0; j < olObj.children.length; j++) {
                        olObj.children[j].removeAttribute("class");
                        }
                  //设置当前鼠标点击li的背景颜色
                  this.className="active"
                  //获取鼠标点击的当前li的索引值
                   index=this.getAttribute("index");
                  //移动ul
                  animate(ulObj,-index*imgWidth);
            }     
      }
      // 设置ol中第一个li有背景颜色
      olObj.children[0].className="active"
      
     //控制自动轮播的时间
     var timeId=setInterval(clickHandle,5000);


      //鼠标进入大盒子显示左右指示点
            box.onmouseover=function(){
                  arr.style.display="block";
                  clearInterval(timeId)//鼠标进去停止轮播
            }
      //鼠标出去div隐藏 左右指示点
            box.onmouseout=function(){
                  arr.style.display="none";
                  timeId=setInterval(clickHandle,5000)//鼠标移除开始继续轮播
            }
      // 左边按钮
     document.getElementById("left").onclick=function (){
            if(index==0){
                  index=5;
                  ulObj.style.left=-index*imgWidth+"px";
            }
           index--;
           animate(ulObj,-index*imgWidth);

for (var i = 0; i < olObj.children.length; i++) {
    olObj.children[i].removeAttribute("class");
     }
  //当前的index索引对应的按钮设置颜色
  olObj.children[index].className = "active";

     }


      // 右边按钮
      document.getElementById("right").onclick=clickHandle;
       function clickHandle(){
            if(index==list.length-1){
                  index=0;
                  ulObj.style.left=0+"px";
            }
           index++;
           animate(ulObj,-index*imgWidth)
           if (index == list.length - 1) {

 olObj.children[olObj.children.length - 1].className = "";

       olObj.children[0].className = "active";
             } else {
       for (var i = 0; i < olObj.children.length; i++) {
              olObj.children[i].removeAttribute("class");
                   }
             olObj.children[index].className = "active";
             }
     }

      

      //设置任意的一个元素,移动到指定的目标位置
       function animate(element, target) {
         clearInterval(element.timeId);
         //定时器的id值存储到对象的一个属性中
         element.timeId = setInterval(function () {
           //获取元素的当前的位置,数字类型
           var current = element.offsetLeft;
           //每次移动的距离
           var step = 790;
           step = current < target ? step : -step;
           //当前移动到位置
           current += step;
           if (Math.abs(current - target) > Math.abs(step)) {
             element.style.left = current + "px";
           } else {
             //清理定时器
             clearInterval(element.timeId);
             //直接到达目标
             element.style.left = target + "px";
           }
         }, 10);
       }
      

})()