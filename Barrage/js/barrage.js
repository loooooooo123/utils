/**
 * Created by xiaojiayuan on 2018/5/11.
 * 功能描述：弹幕
 * 兼容性ie8+
 */

//弹幕发送主方法
function barrageSend(){

    //发送内容
    var getInputText = document.getElementById('barrageInput').value;
    //字体大小
    var getTextSize = document.getElementById('barrageFontSize').value;
    //字体颜色
    var getTextColor = document.getElementById('barrageFontColor').value;

    if(getInputText==null||getInputText==''||getInputText.trim()==''){
        alert('请不要发送空弹幕哦(⊙o⊙)？');
        return;
    }

    //创建弹幕dom
    var sp1=document.createElement('div');
    //弹幕属性设置
    sp1.setAttribute('style',"color:"+getTextColor+"\;font-size:"+getTextSize+'px');
    //弹幕文字
    var text1=document.createTextNode(getInputText);
    sp1.appendChild(text1);
    dom.appendChild(sp1);

    animateTextLeft(sp1);

}

//滚动动画主方法
function animateTextLeft(sp1){
    sp1.style.position='absolute';
    sp1.style.top=(RandomNumBoth(0,getParDomHeight)-10)+'px';
    sp1.style.left=getParDomWidth+'px';

    var timer = setInterval(function(){
        var getLeft1= parseFloat(getStyle(sp1,'left').replace('px',''));

        if(getLeft1<=-getStyle(sp1,'width').replace('px','')){
            clearInterval(timer);
            sp1.remove();
            return;
        }
        sp1.style.left= getLeft1-1+'px';
    },10);

}