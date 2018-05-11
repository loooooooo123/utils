/**
 * Created by xiaojiayuan on 2018/5/11.
 * 功能描述：工具函数库
 */

//获取dom元素的css样式
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}

//生成某个范围内随机数
function RandomNumBoth(Min,Max){
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}