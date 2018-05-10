var xjy_public = function () { };

//生成唯一id
function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
}

/*
* 功能描述：弹出提示框
* 参数：
* title：提示框标题文字
* id：提示框唯一id，通过此id进行关闭操作
* typeImg：提示框图标类型如下：
* 1成功，2失败，3提示，都是1.5秒自动消失
* 4确认提示框（确认+取消按钮）
*
*/

xjy_public.prototype.msgWindow = function (title, typeImg, callback) {

    //弹窗类型，默认1
    var typeImgUrl='success';

    switch(typeImg){
        case 2:
            typeImgUrl='warn';
            break;
        case 3||4:
            typeImgUrl='notice';
            break;
    }

    //获取唯一ID
    var getId=guid();
    //确定取消提示框不要下边距
    var isCof=typeImg==4?' msg_con2':'';


    var dom1 = '<div class="xo_window_par" id="'+getId+'">';
    dom1 += '<div class="xo_window_con">';
    dom1 += '    <div class="msg_title"><div class="icon_close cursor close">关闭</div><span class="title_span">'+title+'</span></div>';
    dom1 += '    <div class="msg_con '+isCof+'">';
    dom1 += '        <div class="msg_content">';
    dom1 += '            <div class="clear1"></div>';
    dom1 += '            <div class="msg_text"><img class="icon_title icon_success" src="images/xiao/'+typeImgUrl+'.png"/>提示内容文字容文字</div>';
    dom1 += '        </div>';
    dom1 += '        <div class="msg_footer">';

    //必须存在callback，才是确认框，否则提示1.5秒消失
    if(callback){
        dom1 += '            <button type="button" class="xo_window_btn1 success_ok cursor">确定</button>';
        dom1 += '            <button type="button" class="xo_window_btn1 success_no cursor">取消</button>';
    }
    
    dom1 += '        </div>';
    dom1 += '    </div>';
    dom1 += '</div>';
    dom1 += '</div>';

    //dom
    $('body').append($(dom1));

    //关闭窗口
    function close1(){
        $('#'+getId).fadeOut(300).remove();
    }

    //关闭效果
    $('.xo_window_par .success_no').click(function(){
        close1();
    });
    $('.xo_window_par .close').click(function(){
        close1();
    });

    //1.5秒关闭
    if(typeImg<4){
        setTimeout(function(){
            close1();
        },1500);
    }

    //回调函数
    if(callback){
        $('#'+getId+' .success_ok').click(function(){
            callback();
            close1();
        });
    }

}