/**
 * Created by 胡文星 on 2017/3/4.
 */
window.onload=function() {
    var Onum = document.getElementById("num");
    var Oshow = document.getElementById("show");
    var oInp = Oshow.getElementsByTagName("input")[0];    //输出框
    var aInp = Onum.getElementsByTagName("input");
    var oSign = document.getElementById("sign");
    var aSign = oSign.getElementsByTagName("input");     //符号按钮
    var oResult=document.getElementById("result");
    var oResult_show=document.getElementById("result_show");
    var temp='',oper="";
    var num1= 0,num2= 0,res=0;

    //获取第一个数
   for (var i = 0; i < aInp.length; i++) {
        aInp[i].onclick = function () {
            temp+= this.value;
            oInp.value=temp;
            //alert(!(parseFloat(temp)%1===0));
            /*if(!(parseFloat(temp)%1===0)){
                alert(aInp[10].value);
                aInp[10].;
            }*/

        }
    }
    for (var j = 0; j < aSign.length; j++) {
        aSign[j].onclick = function () {
            num1=(oInp.value);
            //alert(this.value);
            oper = this.value;
            temp = "";

            /*if(oper=="clc"){
                temp=temp.substring(0,temp.length-1);
                alert(temp);
            }*/
            //alert(oper=="clc");
            oInp.value = temp;

            //alert(num1);
        }
    }
    //输出结果
    oResult.onclick=function(){
        num2=temp;       //取得第二个数字
        //alert(num2);
       if(oper=="+"){
           res=parseFloat(num1)+parseFloat(num2);
       }else if(oper=="-"){
           res=parseFloat(num1)-parseFloat(num2);
       }else if(oper=="*"){
           res=parseFloat(num1)*parseFloat(num2);
       }else if(oper=="/"){
           res=parseFloat(num1)/parseFloat(num2);
       }else if(oper=="%"){
           res=parseFloat(num1)%parseFloat(num2);
       }
        oInp.value = res;
        temp="";
        oResult_show.innerHTML=res.toFixed(2);
    }
};
