/**
 *弹出loading圈
 * @param String P 为加载文字
 */
var Toast = function(p) {
    var _str = '<div id="loadingToast" class="weui_loading_toast" style="display:block;">' + '<div class="weui_mask_transparent"></div>' + '<div class="weui_toast">' + '  <div class="weui_loading">' + '<div class="weui_loading_leaf weui_loading_leaf_0"></div>' + '<div class="weui_loading_leaf weui_loading_leaf_1"></div>' + '<div class="weui_loading_leaf weui_loading_leaf_2"></div>' + '<div class="weui_loading_leaf weui_loading_leaf_3"></div>' + '<div class="weui_loading_leaf weui_loading_leaf_4"></div>' + '<div class="weui_loading_leaf weui_loading_leaf_4"></div>' + '<div class="weui_loading_leaf weui_loading_leaf_5"></div>' + '<div class="weui_loading_leaf weui_loading_leaf_6"></div>' + '<div class="weui_loading_leaf weui_loading_leaf_7"></div>' + '<div class="weui_loading_leaf weui_loading_leaf_8"></div>' + '<div class="weui_loading_leaf weui_loading_leaf_9"></div>' + '<div class="weui_loading_leaf weui_loading_leaf_10"></div>' + '<div class="weui_loading_leaf weui_loading_leaf_11"></div>' + '</div>' + '<p class="weui_toast_content">' + p + '</p></div></div>'
    $('body').append(_str);
}
/**
 *关闭loading圈
 *
 */
var closeToast = function() {
    $('body #loadingToast').empty();
}
/**
 *页面2 的标签管理
 */
var tagManger = {
    ele : $('.section2 .earth .ico_tag'),
    Set : function() {
        var Apos = [{
            'left' : '32%',
            'top' : '13%',
            '-webkit-transform' : 'scale(1)'
        }, {
            'left' : '50%',
            'top' : '16%',
            '-webkit-transform' : 'scale(0.6)'
        }, {
            'left' : '84%',
            'top' : '22%',
            '-webkit-transform' : 'scale(0.5)'
        }, {
            'left' : '70%',
            'top' : '25%',
            '-webkit-transform' : 'scale(0.8)'
        }, {
            'left' : '3%',
            'top' : '20%',
            '-webkit-transform' : 'scale(0.5)'
        }, {
            'left' : '8%',
            'top' : '18%',
            '-webkit-transform' : 'scale(0.6)'
        }, {
            'left' : '24%',
            'top' : '30%',
            '-webkit-transform' : 'scale(0.45)'
        }, {
            'left' : '50%',
            'top' : '38%',
            '-webkit-transform' : 'scale(0.8)'
        }, {
            'left' : '70%',
            'top' : '52%',
            '-webkit-transform' : 'scale(0.6)'
        }, {
            'left' : '1%',
            'top' : '52%',
            '-webkit-transform' : 'scale(0.5)'
        }, {
            'left' : '20%',
            'top' : '58%',
            '-webkit-transform' : 'scale(0.6)'
        }, {
            'left' : '35%',
            'top' : '70%',
            '-webkit-transform' : 'scale(0.6)'
        }, {
            'left' : '39%',
            'top' : '71%',
            '-webkit-transform' : 'scale(0.5)'
        }, {
            'left' : '60%',
            'top' : '60%',
            '-webkit-transform' : 'scale(0.6)'
        }]
        var tag = this.ele;
        var len = Apos.length;
        var delayUnit = 500;
        var startTime = 0;
        var duration = '700ms';
        for (var i = 0; i < len; i++) {
            startTime += delayUnit;
            Apos[i]['-webkit-transition-delay'] = (startTime + 'ms');
            Apos[i]['-webkit-transition-duration'] = duration;
            tag.eq(i).css(Apos[i]);
            tag.eq(i).find('div').addClass('tagBounce')
        }
    },
    Clear : function() {
        var tag = this.ele;
        var len = tag.length;
        for (var i = 0; i < len; i++) {
            tag.eq(i).css({
                '-webkit-transform' : 'scale(0)',
                '-webkit-transition-duration' : '0s',
                '-webkit-transition-delay' : '1s'
            });
        }
    }
}
/**
 *页面3 3个圆圈
 */
var p3_Manger = {
    ele : $('.section3 .p3_content .p3_tag'),
    Set : function() {
        var tag = this.ele;
        var len = tag.length;
        var delayUnit = 500;
        var startTime = 0;
        var duration = '1200ms';
        for (var i = 0; i < len; i++) {
            startTime += delayUnit;
            var cssSty = {
                'opacity' : 1,
                '-webkit-transition-delay' : (startTime + 'ms'),
                '-webkit-transition-duration' : duration
            }
            tag.eq(i).css(cssSty);
        }
    },
    Clear : function() {
        var tag = this.ele;
        var len = tag.length;
        for (var i = 0; i < len; i++) {
            tag.eq(i).css({
                'opacity' : '0',
                '-webkit-transition-duration' : '0s',
                '-webkit-transition-delay' : '500'
            });
        }
    }
}
/**
 *页面4 爬梯子
 */
var p4_Manger = {
    ele : $('.section4 .p4_content .p4_item'),
    Set : function() {
        var item = this.ele;
        var len = item.length;
        var delayUnit = 500;
        var startTime = 0;
        var duration = '700ms';
        for (var i = 0; i < len; i++) {
            startTime += delayUnit;
            var itemSty = {
                'opacity' : 1,
                '-webkit-transition-delay' : (startTime + 'ms'),
                '-webkit-transition-duration' : duration
            }
            item.eq(i).css(itemSty);
            itemSty['bottom'] = '80%';
            itemSty['-webkit-transition-duration'] = '2000ms';
            item.eq(i).find('.p4_tag').css(itemSty);
        }
    },
    Clear : function() {
        var item = this.ele;
        var len = item.length;
        for (var i = 0; i < len; i++) {
            var style = {
                'opacity' : '0',
                '-webkit-transition-duration' : '0s',
                '-webkit-transition-delay' : '1s'
            };
            item.eq(i).css(style);
            style['bottom'] = '-66%';
            style['opacity'] = '1';
            item.eq(i).find('.p4_tag').css(style);
        }
    }
}
/**
 *页面5 树状图
 */
var p5_Manger = {
    ele : $('.section5 .img .icon'),
    Set : function() {
        var Apos = [{
            'opacity' : '0',
            'top' : '26%',
            'left' : '10%',
            'width' : '35%',
            'height' : '12%',
            'background-image' : 'url("images/bg5_1.png")'
        }, {
            'opacity' : '0',
            'top' : '40%',
            'left' : '3%',
            'width' : '35%',
            'height' : '12%',
            'background-image' : 'url("images/bg5_2.png")'
        }, {
            'opacity' : '0',
            'top' : '44%',
            'left' : '62%',
            'width' : '35%',
            'height' : '12%',
            'background-image' : 'url("images/bg5_4.png")'
        }, {
            'opacity' : '0',
            'top' : '58%',
            'left' : '58%',
            'width' : '35%',
            'height' : '12%',
            'background-image' : 'url("images/bg5_5.png")'
        }, {
            'opacity' : '0',
            'top' : '60%',
            'left' : '6%',
            'width' : '35%',
            'height' : '12%',
            'background-image' : 'url("images/bg5_3.png")'
        }]
        var tag = this.ele;
        var len = Apos.length;
        var delayUnit = 1000;
        var startTime = 0;
        var duration = '2000ms';
        for (var i = 0; i < len; i++) {
            startTime += delayUnit;
            Apos[i]['-webkit-transition-delay'] = (startTime + 'ms');
            Apos[i]['-webkit-transition-duration'] = duration;
            Apos[i]['opacity'] = 1;
            tag.eq(i).css(Apos[i]);

        }
    },
    Clear : function() {
        var Apos = [{
            'left' : '-30%'
        }, {
            'left' : '-30%'
        }, {
            'left' : '100%'
        }, {
            'left' : '100%'
        }, {
            'left' : '-30%'
        }]
        var tag = this.ele;
        var len = Apos.length;
        var duration = '100ms';
        for (var i = 0; i < len; i++) {
            Apos[i]['-webkit-transition-duration'] = duration;
            Apos[i]['opacity'] = 0;
            tag.eq(i).css(Apos[i]);

        }
    }
}
/**
 *页面6 圈圈弹出效果
 */
var p6_Manger = {
    ele : $('.section6 .zhexian .icon_tag'),
    Set : function() {
        var Apos = [{
            'left' : '38%',
            'top' : '34%',
            '-webkit-transform' : 'scale(1)',
            'background-image' : 'url("images/bg6_c1.png")',
            'width' : '4em',
            'height' : '4em'
        }, {
            'left' : '18%',
            'top' : '19%',
            '-webkit-transform' : 'scale(1)',
            'background-image' : 'url("images/bg6_b1.png")',
            'width' : '2em',
            'height' : '2em'
        }, {
            'left' : '58%',
            'top' : '79%',
            '-webkit-transform' : 'scale(1)',
            'background-image' : 'url("images/bg6_b3.png")',
            'width' : '1.5em',
            'height' : '1.5em'
        }, {
            'left' : '20%',
            'top' : '52%',
            '-webkit-transform' : 'scale(1)',
            'background-image' : 'url("images/bg6_b2.png")',
            'width' : '1.2em',
            'height' : '1.2em'
        }, {
            'left' : '65%',
            'top' : '27%',
            '-webkit-transform' : 'scale(1)',
            'background-image' : 'url("images/bg6_18.png")',
            'width' : '2em',
            'height' : '2em'
        }, {
            'left' : '-4%',
            'top' : '10%',
            '-webkit-transform' : 'scale(1)',
            'background-image' : 'url("images/bg6_a1.png")',
            'width' : '3em',
            'height' : '3em'
        }, {
            'left' : '33%',
            'top' : '-10%',
            '-webkit-transform' : 'scale(1)',
            'background-image' : 'url("images/bg6_a2.png")',
            'width' : '2.7em',
            'height' : '2.7em'
        }, {
            'left' : '84%',
            'top' : '13%',
            '-webkit-transform' : 'scale(1)',
            'background-image' : 'url("images/bg6_a3.png")',
            'width' : '4.5em',
            'height' : '4.5em'
        }, {
            'left' : '74%',
            'top' : '75%',
            '-webkit-transform' : 'scale(1)',
            'background-image' : 'url("images/bg6_a4.png")',
            'width' : '3.2em',
            'height' : '3.2em'
        }, {
            'left' : '0',
            'top' : '63%',
            '-webkit-transform' : 'scale(1)',
            'background-image' : 'url("images/bg6_a5.png")',
            'width' : '3.2em',
            'height' : '3.2em'
        }]
        var tag = this.ele;
        var len = Apos.length;
        for (var i = 0; i < len - 5; i++) {
            tag.eq(i).css({
                '-webkit-transition-duration' : '1000ms',
                '-webkit-transition-delay' : '1000ms'
            });
            tag.eq(i).css(Apos[i]);
        }
        for (var j = 5; j < len; j++) {
            tag.eq(j).css({
                '-webkit-transition-duration' : '1000ms',
                '-webkit-transition-delay' : '2000ms'
            });
            tag.eq(j).css(Apos[j]);
        }
    },
    Clear : function() {
        var tag = this.ele;
        var len = tag.length;
        for (var i = 0; i < len; i++) {
            tag.eq(i).css({
                '-webkit-transform' : 'scale(0)',
                '-webkit-transition-duration' : '0s',
                '-webkit-transition-delay' : '1s'
            });
        }
    }
}
/**
 *页面7 油漆工出现
 */
var p7_Manger = {
    ele : $('.section7 .img .icon'),
    Set : function() {
        var Apos = [{
            'opacity' : '0',
            'top' : '0%',
            'left' : '3%',
            'width' : '25%',
            'height' : '18%',
            'background-image' : 'url("images/bg7_light.png")'
        }, {
            'opacity' : '0',
            'top' : '37%',
            'left' : '65%',
            'width' : '25%',
            'height' : '13%',
            'background-image' : 'url("images/bg7_photo.png")'
        }, {
            'opacity' : '0',
            'top' : '37%',
            'left' : '5%',
            'width' : '55%',
            'height' : '63%',
            'z-index' : '9',
            'bottom' : '0',
            'background-image' : 'url("images/bg7_man.png")'
        }, {
            'opacity' : '0',
            'top' : '53%',
            'left' : '50%',
            'width' : '42%',
            'height' : '28%',
            'background-image' : 'url("images/bg7_tv.png")'
        }, {
            'opacity' : '0',
            'top' : '83%',
            'left' : '65%',
            'width' : '25%',
            'height' : '10%',
            'background-image' : 'url("images/bg7_yq.png")'
        }]
        var tag = this.ele;
        var len = Apos.length;
        var delayUnit = 1000;
        var startTime = 0;
        var duration = '2000ms';
        for (var i = 0; i < len; i++) {
            startTime += delayUnit;
            Apos[i]['-webkit-transition-delay'] = (startTime + 'ms');
            Apos[i]['-webkit-transition-duration'] = duration;
            Apos[i]['opacity'] = 1;
            tag.eq(i).css(Apos[i]);

        }
    },
    Clear : function() {
        var Apos = [{
            'top' : '-18%'
        }, {
            'top' : '-50%'
        }, {
            'left' : '-60%'
        }, {
            'left' : '100%'
        }, {
            'left' : '100%'
        }]
        var tag = this.ele;
        var len = Apos.length;
        var duration = '100ms';
        for (var i = 0; i < len; i++) {
            Apos[i]['-webkit-transition-duration'] = duration;
            Apos[i]['opacity'] = 0;
            tag.eq(i).css(Apos[i]);

        }
    }
}
/**
 *页面8 二维码弹出
 */
var p8_Manger = {
    ele : $('.section8 '),
    Set : function() {
        // var Apos = [{
        // '-webkit-transform':'scale(0.9)',
        // '-webkit-transition-duration':'1s'
        // }]
        // var tag = this.ele;
        // tag.eq(0).css(Apos[0]);
        //上滑监听
        var startY;
        $("#select8").on({
            'touchstart' : function(e) {
                var ev = e.originalEvent.touches[0];
                startY = Math.floor(ev.clientY);
            },
            'touchmove' : function(e) {
                e.preventDefault();
                var ev = e.originalEvent.changedTouches[0];
                var moveY = startY - ev.clientY;
                if (moveY > 0) {
                    $(".bg8_FL").addClass("bg8_shade");
                    $(".bg8_shade").click(function() {
                        $(this).css("display", "none");
                    })
                }
            },
            'touchend' : function(e) {

            }
        })
    },
    Clear : function() {
        var tag = this.ele;
        // tag.eq(0).css({ '-webkit-transform':'scale(0)','-webkit-transition-duration':'1000ms'})
    }
}

