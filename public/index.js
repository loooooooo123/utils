/**
 * Created by xiaojiayuan on 2018/5/11.
 * �������������ߺ�����
 */

//��ȡdomԪ�ص�css��ʽ
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}

//����ĳ����Χ�������
function RandomNumBoth(Min,Max){
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //��������
    return num;
}