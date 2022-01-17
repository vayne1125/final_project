let hei = window.innerHeight;
let wid = window.innerWidth;
function image_repos(){
    $(document).ready(function(){
        $("#wood").css({
            "top":(hei/3+140)+"px",
            "width":(wid-10)+"px",
        })  
        
        $("#cook_1").css({
            "top":(hei/3+50)+"px",
            "left":(wid/2+300)+"px",
        })

        $("#cook_2").css({
            "top":(hei/3+80)+"px",
            "left":(wid/2-500)+"px",
        })

        $("#fish").css({
            "top":(hei/3+150)+"px",
            "left":(wid/2+200)+"px",
        })

        $("#fish_ok").css({
            "top":(hei/3+150)+"px",
            "left":(wid/2+60)+"px",
        })

        $("#time_cook_1").css({
            "top":(hei/3+100)+"px",
            "left":(wid/2+350)+"px",
        })

        $("#egg").css({
            "top":(hei/3+200)+"px",
            "left":(wid/2-460)+"px",
        })

        $("#egg_ok").css({
            "top":(hei/3+180)+"px",
            "left":(wid/2-400)+"px",
        })

        $("#time_cook_2").css({
            "top":(hei/3+100)+"px",
            "left":(wid/2-450)+"px",
        })

        $(".guest1").css({
            "top":(hei/3-200)+"px",
            "left":(wid/2-450)+"px",
        })

        $(".guest2").css({
            "top":(hei/3-200)+"px",
            "left":(wid/2-250)+"px",
        })

        $(".guest3").css({
            "top":(hei/3-200)+"px",
            "left":(wid/2-50)+"px",
        })

        $(".guest4").css({
            "top":(hei/3-200)+"px",
            "left":(wid/2+150)+"px",
        })
    })
}
function customer(){
    let food = ["要烤魚!","要煎蛋!"]

}
var IE = "ActiveXObject" in window ;
var beginDrag = function(e){
    e.dataTransfer.setData("text", e.target.id);
   
}
var allowDrop = function(e) {
        e.preventDefault();
        //console.log(e.target.id);
}
var toDrop = function(e){  //放下時
    e.preventDefault();
    let food = e.dataTransfer.getData("text");  //id
    let food_ = document.getElementById(food);
    let cook = e.target.id;
    let cook_ = document.getElementById(cook);
    console.log(e.target.id);  //烤箱
    console.log(food);         //魚
    let output = "Cooking~";
    if(cook == "cook_1"){
        if(food == "fish"){
            cook_.setAttribute("ondragover",function no(){});
            $("#fish").hide();
            cook_.setAttribute("src","cooking_1.png");
            let time = 5;
            document.getElementById("time_cook_1").innerHTML = output+ time;
           $("#time_cook_1").css("color","white")
            _5sec = setInterval(function(){
                time--;
                document.getElementById("time_cook_1").innerHTML =   output+time;
            }, 1000);
            setTimeout(function(){
                $("#fish").show();
                cook_.setAttribute("src","cook_1.png");
                document.getElementById("fish_ok").setAttribute("src","fish_ok.png");
                document.getElementById("time_cook_1").innerHTML = "TimesOut!!!";
                clearInterval(_5sec);
                cook_.setAttribute("ondragover","allowDrop(event)");
                $("#time_cook_1").css("color","black")
            },5000)
        }
    }else if(cook == "cook_2"){
        if(food == "egg"){
            cook_.setAttribute("ondragover",function no(){});
            $("#egg").hide();
            cook_.setAttribute("src","cooking_2.png");
            let time = 3;
            document.getElementById("time_cook_2").innerHTML = output+ time;
           $("#time_cook_2").css("color","white")
            _3sec = setInterval(function(){
                time--;
                document.getElementById("time_cook_2").innerHTML =   output+time;
            }, 1000);
            setTimeout(function(){
                $("#egg").show();
                cook_.setAttribute("src","cook_2.png");
                document.getElementById("egg_ok").setAttribute("src","egg_ok.png");
                document.getElementById("time_cook_2").innerHTML = "TimesOut!!!";
                clearInterval(_3sec);
                cook_.setAttribute("ondragover","allowDrop(event)");
            },3000)
        }

    }

}

function snowFall(snow) {
    snow = snow || {};
    this.maxFlake = snow.maxFlake || 200;   
    this.flakeSize = snow.flakeSize || 10;   
    this.fallSpeed = snow.fallSpeed || 0.02;
}

//兼容寫法
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

      snowFall.prototype.start = function(){
          snowCanvas.apply(this);
          createFlakes.apply(this);
          drawSnow.apply(this)
      }

      function snowCanvas() {
          var snowcanvas = document.createElement("canvas");
          snowcanvas.id = "snowfall";
          snowcanvas.width = wid;
          snowcanvas.height = hei;
          snowcanvas.setAttribute("style", "position:absolute; top: 1; left: 1; z-index: 1; pointer-events: none;");
          document.getElementsByTagName("body")[0].appendChild(snowcanvas);
          this.canvas = snowcanvas;
          this.ctx = snowcanvas.getContext("2d");
          window.onresize = function() {
              snowcanvas.width = wid;
              snowcanvas.height = hei;
          }
      }

      function flakeMove(canvasWidth, canvasHeight, flakeSize, fallSpeed) {
          this.x = Math.floor(Math.random() * canvasWidth);  
          this.y = Math.floor(Math.random() * canvasHeight);   
          this.size = Math.random() * flakeSize + 2;           
          this.maxSize = flakeSize;                            
          this.speed = Math.random() * 1 + fallSpeed;          
          this.fallSpeed = fallSpeed;                         
          this.velY = this.speed;                             
          this.velX = 0;                                       
          this.stepSize = Math.random() / 30;                 
          this.step = 0                                    
      }

      flakeMove.prototype.update = function() {
          var x = this.x,
              y = this.y;
          this.velX *= 0.005;
          if (this.velY <= this.speed) {
              this.velY = this.speed
          }
          this.velX += Math.cos(this.step += .05) * this.stepSize;
  
          this.y += this.velY;
          this.x += this.velX;
          if (this.x >= wid || this.x <= 0 || this.y >= hei || this.y <= 0) {
            this.reset(wid, hei)
        }
      };
 
      flakeMove.prototype.reset = function(width, height) {
          this.x = Math.floor(Math.random() * width);
          this.y = 0;
          this.size = Math.random() * this.maxSize + 2;
          this.speed = Math.random() * 1 + this.fallSpeed;
          this.velY = this.speed;
          this.velX = 0;
      };

      flakeMove.prototype.render = function(ctx) {
          var snowFlake = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
          snowFlake.addColorStop(0, "rgba(255, 255, 255, 0.9)");  
          snowFlake.addColorStop(.5, "rgba(255, 255, 255, 0.5)"); 
          snowFlake.addColorStop(1, "rgba(255, 255, 255, 0)");   
          ctx.save();
          ctx.fillStyle = snowFlake;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
     };
  
     function createFlakes() {
         var maxFlake = this.maxFlake,
             flakes = this.flakes = [],
             canvas = this.canvas;
         for (var i = 0; i < maxFlake; i++) {
             flakes.push(new flakeMove(canvas.width, canvas.height, this.flakeSize, this.fallSpeed))
         }
     }
     
     function drawSnow() {
         var maxFlake = this.maxFlake,
             flakes = this.flakes;
         ctx = this.ctx, canvas = this.canvas, that = this;
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         for (var e = 0; e < maxFlake; e++) {
             flakes[e].update();
             flakes[e].render(ctx);
         }  
         this.loop = requestAnimationFrame(function() {
             drawSnow.apply(that);
         });
     } 
     var snow = new snowFall({maxFlake:60});