let hei = window.innerHeight;
let wid = window.innerWidth;
function image_repos(){
    $(document).ready(function(){
        $("#roof").css({
            "left" : ""+wid/3+"px",
            "top"  : ""+hei/4+"px",
        });
        $("#house").css({
            "left" : ""+(wid/3+50)+"px",
            "top"  : ""+(hei/4+100)+"px",
        })
        $("#apple_with_board").css({
            "left" : ""+(wid/3-140)+"px",
            "top"  : ""+(hei/4+80)+"px",
        })
        $("#restaurant").css({
            "left" : ""+(wid/3-80)+"px",
            "top"  : ""+(hei/4+50)+"px",
        })
        $("#door_out").css({
            "left" : ""+(wid/3+173.5)+"px",
            "top"  : ""+(hei/4+210)+"px",
        })
        $("#door_in").css({
            "left" : ""+(wid/3+173.5)+"px",
            "top"  : ""+(hei/4+210)+"px",
        })
        $("#chimney").css({
            "left" : ""+(wid/3+270)+"px",
            "top"  : ""+(hei/4)+"px",
        })
        
        $("#cloud").css({
            "left" : ""+(wid/3+270)+"px",
            "top"  : ""+(hei/4)+"px",
        })
        
        $("start").css({
            "left" : ""+(wid/3+270)+"px",
            "top"  : ""+(hei/4)+"px",
        })
        $("#start").css({
            "left" : ""+(wid/3+60)+"px",
            "top"  : ""+(hei/4+130)+"px",
        })
    });
    doani();
}
function doani(){
    $("#start").hide();
    $("#door_out").hide();
    $("#cloud").hide();
    $("#apple_with_board").hide();
    $("#roof").addClass("roof_")
    setTimeout(function(){
        $("#house").addClass("house_")
    },3000)
    setTimeout(function(){
        $("#apple_with_board").fadeTo(2500,1);
        $("#restaurant").fadeTo(3000,1);
    },4500)
    setTimeout(function(){
        $("#door_out").fadeIn();
        $("#door_in").fadeIn();
        $("#chimney").fadeIn();
    },4500)
    $("#door_out").mouseover(function(){
        $("#door_out").css({
            "transform":"skewY(20deg)",
            "top"  : "+=11px",
        });
    })
    $("#door_out").mouseout(function(){
        $("#door_out").css({
            "transform":"skewY(0deg)",
            "left" : ""+(wid/3+173.5)+"px",
            "top"  : ""+(hei/4+210)+"px",
        });
    })
    $("#door_out").click(function(){
        $("div div").fadeTo(100,0);
        $("div div").hide();
        $("#start").show();
        $("#restaurant").css({
            "top":"-=52px",
        })
    })
}
function addDarkmodeWidget() {
    const options = {
        bottom: '100px', // default: '32px'
        right: '32px', // default: '32px'
        left: 'unset', // default: 'unset'
        time: '0.5s', // default: '0.3s'
        mixColor: '#A6FFFF', // default: '#fff'
        backgroundColor: '#272727',  // default: '#fff'
        buttonColorDark: '#A6FFFF',  // default: '#100f2c'
        buttonColorLight: '#272727', // default: '#fff'
        saveInCookies: true, // default: true,
        label: '🌓', // default: '' //🌓
        autoMatchOsTheme: true // default: true
    }
    let darkmode = new Darkmode(options);
    darkmode.showWidget();
}
 

(function($){  
   $.fn.snow = function(options){  
    var $flake = $('<div id="snowbox" />').css({'position': 'absolute','z-index':'9999', 'top': '-50px', 'cursor': 'pointer'}).html('❄'),  
    documentHeight  = $(document).height(),  
    documentWidth   = $(document).width(),  
    defaults = {  
        minSize     : 10,  
        maxSize     : 20,  
        newOn       : 1000,  
        flakeColor  : "#D9FFFF" // 此处可以定义雪花颜色，若要白色可以改为#FFFFFF  //#80FFFF  #AFDAEF
    },  
    options = $.extend({}, defaults, options);  
    var interval= setInterval( function(){  
    var startPositionLeft = Math.random() * documentWidth - 100,  
    startOpacity = 0.5 + Math.random(),  
    sizeFlake = options.minSize + Math.random() * options.maxSize,  
    endPositionTop = documentHeight - 200,  
    endPositionLeft = startPositionLeft - 500 + Math.random() * 500,  
    durationFall = documentHeight * 10 + Math.random() * 5000;  
    $flake.clone().appendTo('body').css({  
        left: startPositionLeft,  
        opacity: startOpacity,  
        'font-size': sizeFlake,  
        color: options.flakeColor  
    }).animate({  
        top: endPositionTop,  
       left: endPositionLeft,  
        opacity: 0.2  
    },durationFall,'linear',function(){  
       $(this).remove()  
    });  
    }, options.newOn);  
    };  
})(jQuery);  
$(function(){  
    $.fn.snow({   
        minSize: 5, // 定义雪花最小尺寸 
      maxSize: 50,// 定义雪花最大尺寸  
        newOn: 300  // 定义密集程度，数字越小越密集  
   });  
});
//  
//

       // 控制下雪 
       function snowFall(snow) {
           // 可配置属性
           snow = snow || {};
           this.maxFlake = snow.maxFlake || 200;   // 最多片数
           this.flakeSize = snow.flakeSize || 10;  // 雪花形状 
           this.fallSpeed = snow.fallSpeed || 0.02;   // 坠落速度 
     }
      // 兼容写法
      requestAnimationFrame = window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          function(callback) { setTimeout(callback, 1000 / 60); };
  
      cancelAnimationFrame = window.cancelAnimationFrame ||
          window.mozCancelAnimationFrame ||
          window.webkitCancelAnimationFrame ||
          window.msCancelAnimationFrame ||
          window.oCancelAnimationFrame;
      // 开始下雪 
      snowFall.prototype.start = function(){
          // 创建画布 
          snowCanvas.apply(this);
          // 创建雪花形状 
          createFlakes.apply(this);
          // 画雪 
          drawSnow.apply(this)
      }
      // 创建画布
      function snowCanvas() {
          // 添加Dom结点
          var snowcanvas = document.createElement("canvas");
          snowcanvas.id = "snowfall";
          snowcanvas.width = window.innerWidth;
          snowcanvas.height = hei;
          snowcanvas.setAttribute("style", "position:absolute; top: 0; left: 0; z-index: 1; pointer-events: none;");
          document.getElementsByTagName("body")[0].appendChild(snowcanvas);
          this.canvas = snowcanvas;
          this.ctx = snowcanvas.getContext("2d");
          // 窗口大小改变的处理
          window.onresize = function() {
              snowcanvas.width = window.innerWidth;
              // snowcanvas.height = window.innerHeight
          }
      }
      // 雪运动对象
      function flakeMove(canvasWidth, canvasHeight, flakeSize, fallSpeed) {
          this.x = Math.floor(Math.random() * canvasWidth);   // x坐标
          this.y = Math.floor(Math.random() * canvasHeight);  // y坐标 
          this.size = Math.random() * flakeSize + 2;          // 形状 
          this.maxSize = flakeSize;                           // 最大形状 
          this.speed = Math.random() * 1 + fallSpeed;         // 坠落速度 
          this.fallSpeed = fallSpeed;                         // 坠落速度 
          this.velY = this.speed;                             // Y方向速度 
          this.velX = 0;                                      // X方向速度 
          this.stepSize = Math.random() / 30;                 // 步长 
          this.step = 0                                       // 步数 
      }
      flakeMove.prototype.update = function() {
          var x = this.x,
              y = this.y;
          // 左右摆动(余弦) 
          this.velX *= 0.005;
          if (this.velY <= this.speed) {
              this.velY = this.speed
          }
          this.velX += Math.cos(this.step += .05) * this.stepSize;
  
          this.y += this.velY;
          this.x += this.velX;
          // 飞出边界的处理 
          if (this.x >= canvas.width || this.x <= 0 || this.y >= canvas.height || this.y <= 0) {
              this.reset(canvas.width, canvas.height)
          }
      };
      // 飞出边界-放置最顶端继续坠落 
      flakeMove.prototype.reset = function(width, height) {
          this.x = Math.floor(Math.random() * width);
          this.y = 0;
          this.size = Math.random() * this.maxSize + 2;
          this.speed = Math.random() * 1 + this.fallSpeed;
          this.velY = this.speed;
          this.velX = 0;
      };
      // 渲染雪花-随机形状（此处可修改雪花颜色！！！）
      flakeMove.prototype.render = function(ctx) {
          var snowFlake = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
          snowFlake.addColorStop(0, "rgba(255, 255, 255, 0.9)");  // 此处是雪花颜色，默认是白色 
          snowFlake.addColorStop(.5, "rgba(255, 255, 255, 0.5)"); // 若要改为其他颜色，请自行查 
          snowFlake.addColorStop(1, "rgba(255, 255, 255, 0)");    // 找16进制的RGB 颜色代码。 
          ctx.save();
          ctx.fillStyle = snowFlake;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
     };
     // 创建雪花-定义形状
     function createFlakes() {
         var maxFlake = this.maxFlake,
             flakes = this.flakes = [],
             canvas = this.canvas;
         for (var i = 0; i < maxFlake; i++) {
             flakes.push(new flakeMove(canvas.width, canvas.height, this.flakeSize, this.fallSpeed))
         }
     }
     // 画雪
     function drawSnow() {
         var maxFlake = this.maxFlake,
             flakes = this.flakes;
         ctx = this.ctx, canvas = this.canvas, that = this;
         // 清空雪花
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         for (var e = 0; e < maxFlake; e++) {
             flakes[e].update();
             flakes[e].render(ctx);
         }
         //  一帧一帧的画
         this.loop = requestAnimationFrame(function() {
             drawSnow.apply(that);
         });
     }
     // 调用及控制方法 
     var snow = new snowFall({maxFlake:60});
     snow.start();
