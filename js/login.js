    // 用户名
            //01查找触发事件的元素
            $(function(){
                  var $input=$(".reg-d1>input")
                  $input.focus(function(){//02绑定事件处理函数
                      $input.attr("placeholder","请输入6~8为数字或字母的账号") //03查找要修改的元素//04修改元素
      
                   })
                  // 当失去焦点的时候进行验证
                  $input.blur(function(){
                      $input.attr("placeholder","用户账号不能为空！！！！") //03查找要修改的元素//04修改元素
                  })
            })
      
                 //密码
                 $(function(){
                 var $input=$(".reg-d2>input")
                  $input.focus(function(){//02绑定事件处理函数
                      $input.attr("placeholder","请输入6~11位数字") //03查找要修改的元素//04修改元素
                   })
                   
                   $input.blur(function(){
                      $input.attr("placeholder","密码不能为空！！") //03查找要修改的元素//04修改元素
                  })
            })
                  
      
                  //01查找触发事件的元素
                  var $btn=$(".reg-btn>button")
                  $btn.click(function(){
                        var uname=$(".reg-d1>input").val()//获取用户名的内容
                        var upw=$(".reg-d2>input").val()  //获取密码的内容
                        if(uname.trim() == ''){
                              alert("用户名不能为空")
                              return
                        }

                        if(upw.trim() == ''){
                              alert("密码不能为空")
                        }
                        
                  })
                
                  //02绑定事件处理函数
                  //03查找要修改的元素
                  //04修改元素