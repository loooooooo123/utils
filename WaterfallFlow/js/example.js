/**
 * Created by xiaojiayuan on 2018/5/11.
 * 功能描述：瀑布流函数调用实例
 */

//调用瀑布流函数
waterFall('main', 'item');

//用户调整屏幕大小重新调用瀑布流函数，达到自适应
window.onresize = function () {
    waterFall('main', 'item');
};

//测试用加载数据（模拟ajax数据）
var dataInt = {"data": [{"src": "images/img1.jpg"}, {"src": "images/img2.jpg"}, {"src": "images/img3.jpg"}, {"src": "images/img4.jpg"}]};

//滚屏至底部加载数据
window.onscroll = function () {//滚动事件
    if (fnScroll()) {//当满足条件时触发
        var oParent = document.getElementById('main');
        for (var i = 0; i < dataInt.data.length; i++) {
            //小盒子item
            var aChild = document.createElement('div');
            aChild.className = 'item';
            oParent.appendChild(aChild);

            //小盒子pic
            var oBox = document.createElement('div');
            oBox.className = 'pic';
            aChild.appendChild(oBox);

            //小盒子pic中图片
            var oImg = document.createElement('img');
            oImg.src = dataInt.data[i].src;
            oBox.appendChild(oImg)

            //小盒子title
            var tBox = document.createElement('div');
            var tx = document.createTextNode('图片标题文字内容图片标题文字内容图片标题文字');
            tBox.className = 'title';
            tBox.appendChild(tx);
            oBox.appendChild(tBox);
        }

        //重新调用瀑布流函数，让新盒子形成瀑布流布局
        waterFall('main', 'item');
    }
};