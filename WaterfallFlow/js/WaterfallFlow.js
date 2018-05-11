/**
 * Created by xiaojiayuan on 2018/5/11.
 * 功能描述：瀑布流
 * 兼容性：IE9+
 */

//瀑布流核心函数
function waterFall(parent, child) {
    var oParent = document.getElementById(parent),//父级
        aChild = oParent.getElementsByClassName(child), //子集（IE9以下不支持getElementsByClassName）
        oneWidth = aChild[0].offsetWidth, //原生offsetWidth,包括padding。
        cols = Math.floor((document.documentElement.clientWidth || document.body.clientWidth) / oneWidth),  // 网页宽度/一个元素宽度=列数，Math.floor()表示向下取整。
        aHeight = []; //声明一个空数组来存储每一列的高度
    for (var i = 0; i < aChild.length; i++) {
        if (i < cols) { //i < cols表示是第一行的元素
            aChild[i].style.top = 0; // 第一行top为0
            aChild[i].style.left = i * oneWidth + 'px'; // 第一行left=下标*一个元素的宽度
            aHeight[i] = aChild[i].offsetHeight; // 把第一行每个的高度存进aHeight数组中
        } else {
            var minHeight = Math.min.apply(null, aHeight), // 使用Math.min.apply()得到数组中的最小数，即第一行高度最矮的
                minIdx = aHeight.indexOf(minHeight); // 获取对应的下标（IE8以上）
            aChild[i].style.top = minHeight + 'px'; // 定位，top为上一行最小的高度值
            aChild[i].style.left = minIdx * oneWidth + 'px'; // left为对应下标*一个元素宽度
            aHeight[minIdx] += aChild[i].offsetHeight; //更新数组，总是最小高度的一列加上后面的元素的高度。
        }//样式布局完成
    }
    var maxHeight = Math.max.apply(null, aHeight);
    oParent.style.height = maxHeight + 'px'; //因为是绝对定位absolute，所以父级没有高度，需要取最高的一列的高度给父级
    oParent.style.width = cols * oneWidth + 'px'; //设置父级宽度
}

//判断是否滚屏到底部函数
function fnScroll() {
    var oParent = document.getElementById('main'),//父级
        aChild = oParent.getElementsByClassName('item');
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop, //兼容写法，获取scrollTop
        viewHeight = document.documentElement.clientHeight, //视窗高度（即看到的一屏的高度）
        lastTop = aChild[aChild.length - 1].offsetTop + Math.floor(aChild[aChild.length - 1].offsetHeight / 2);//最后一个子元素距离网页顶部+自身高度的一半，实现未滚动到底就开始加载
    return (lastTop < scrollTop + viewHeight) ? true : false;//到达指定高度后 返回true，触发waterfall()函数 //如果满足条件返回true，否则返回false
}