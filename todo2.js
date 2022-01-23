let hei = window.innerHeight;
let wid = window.innerWidth;
let score = 0;
let endgame = 0;
let timeqq = 4;
function dodo(){
    $("#end").hide();
    let tp = setInterval(function(){
      timeqq--;
      $("#time").html("time : "+timeqq+" sec");
      if(timeqq == 5){
          document.getElementById("countdown_mus").play();
      }
      if(timeqq == 0){
        $("#guest1").hide();
        $("#guest2").hide();
        $("#guest3").hide();
        $("#guest4").hide();
        $("#want1").hide();
        $("#want2").hide();
        $("#want3").hide();
        $("#want4").hide();
        $("#end").show();
        endgame = 1;
        $("#abc").html("score : "+score+"<br>"+'<a href = https://vayne1125.github.io/final_project/ >return pre page </a>')
        clearInterval(tp);
      }
    },1000)
    call_1();
    call_2();
    call_3();
    call_4();
}
function image_repos(){
    $(document).ready(function(){
        $("#body").mouseover(function(e){
            console.log(e.target.id);
        })    
        $("#fish_ok").hide();
        $("#noodle_ok").hide();
        $("#chicken_ok").hide();
        $("#egg_ok").hide();
        $("#guest1").hide();
        $("#guest2").hide();
        $("#guest3").hide();
        $("#guest4").hide();
        $("#want1").hide();
        $("#want2").hide();
        $("#want3").hide();
        $("#want4").hide();
        $("#wood").css({
            "top":(hei/3+140)+"px",
            "width":(wid-10)+"px",
        })  
        $("#time").css({
            "top":60+"px",
            "left":0+"px",
        }) 
        $("#score").css({
            "top":0+"px",
            "left":0+"px",
        }) 
        $("#music").css({
            "top":120+"px",
            "left":0+"px",
        }) 
        $("#cook_1").css({
            "top":(hei/3+50)+"px",
            "left":(wid/2+300)+"px",
        })

        $("#cook_2").css({
            "top":(hei/3+80)+"px",
            "left":(wid/2-500)+"px",
        })

        $("#cook_3").css({
            "top":(hei/3+150)+"px",
            "left":(wid/2-150)+"px",
        })

        
        $("#apple").css({
            "top":(hei/3+100)+"px",
            "left":(wid/2-300)+"px",
        })

        
        $("#pear").css({
            "top":(hei/3+100)+"px",
            "left":(wid/2-350)+"px",
        })


        $(".fri_1").css({
            "top":(hei/3+170)+"px",
            "left":(wid/2-210)+"px",
        })

        $(".fri_2").css({
            "top":(hei/3+170)+"px",
            "left":(wid/2-270)+"px",
        })

        $(".fri_3").css({
            "top":(hei/3+170)+"px",
            "left":(wid/2-240)+"px",
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

        $("#noodle").css({
            "top":(hei/3+180)+"px",
            "left":(wid/2+50)+"px",
        })

        $("#noodle_ok").css({
            "top":(hei/3+180)+"px",
            "left":(wid/2+120)+"px",
        })

        $("#chicken").css({
            "top":(hei/3+160)+"px",
            "left":(wid/2+400)+"px",
        })

        $("#chicken_ok").css({
            "top":(hei/3+210)+"px",
            "left":(wid/2+240)+"px",
        })

        $("#time_cook_2").css({
            "top":(hei/3+100)+"px",
            "left":(wid/2-450)+"px",
        })

        $("#time_cook_3").css({
            "top":(hei/3+120)+"px",
            "left":(wid/2-85)+"px",
        })

        $(".guest1").css({
            "top":(hei/3-100)+"px",
            "left":(wid/2-460)+"px",
        })

        $(".guest2").css({
            "top":(hei/3-100)+"px",
            "left":(wid/2-255)+"px",
        })

        $(".guest3").css({
            "top":(hei/3-100)+"px",
            "left":(wid/2-45)+"px",
        })

        $(".guest4").css({
            "top":(hei/3-100)+"px",
            "left":(wid/2+155)+"px",
        })

        $(".want1").css({
            "top":(hei/3-100)+"px",
            "left":(wid/2-390)+"px",
        })

        $(".want2").css({
            "top":(hei/3-100)+"px",
            "left":(wid/2-190)+"px",
        })

        $(".want3").css({
            "top":(hei/3-100)+"px",
            "left":(wid/2+10)+"px",
        })

        $(".want4").css({
            "top":(hei/3-100)+"px",
            "left":(wid/2+210)+"px",
        })

        $(".end").css({
            "top":(hei/2-130)+"px",
            "left":(wid/2-270)+"px",
            "zIndex":"0"
        })
    })
}
function music(){
    let music = 0;
    $("#music").click(function(){
        if(!music){
            document.getElementById("aud").play();
            $("#music").html("music : on");
            music = 1;
        }else{
            document.getElementById("aud").pause();
            $("#music").html("music : off");
            music = 0;
        }
    })
}
let guest1want="",guset2want="",guest3want="",guest4want="";
let stop1,stop2,stop3,stop4;
let cando1 = 0,cando2 =0,cando3 = 0,cando4 = 0;
function call_1(){
    if(!endgame){
    let time = 500+Math.random()*2000;
    let food = ["要烤魚!","要生魚!","要煎蛋!","要生蛋!","要烤雞!","要活雞!","要湯麵!","要蘋果!","要梨子!","要薯條!"];
    let id = ["fish_ok","fish","egg_ok","egg","chicken_ok","chicken","noodle_ok","apple","pear","fri"];
    let tp = Math.floor(Math.random()*10);
    setTimeout(function(){
        $("#want1").html(food[tp]);
        $("#guest1").fadeIn();
        $("#want1").fadeIn();
        guest1want = id[tp];
   }, time);
    let time2;
    if(timeqq >= 35) time2 = ( 5000 + (Math.floor(Math.random()*6)*1000));  //剛開始遊戲 可能5~10秒
    else if(timeqq >= 15) time2 = (5000 + (Math.floor(Math.random()*3)*1000)); //剛開始遊戲 可能5~7秒
    else time2 = (3000 + (Math.floor(Math.random()*5)*1000)); //3~7秒
    let cnt=0;
    setTimeout(function(){
         let output = food[tp];
         cando1 = 1;
         guest1want = id[tp];
         $("#want1").html(output+"<br>"+(time2-(cnt+1)*1000)/1000);
         $("#guest1").fadeIn();
         $("#want1").fadeIn();
         $("#guest1").attr("ondragover","allowDrop(event)");
         if(cando1==1)stop1 = setInterval(function(){
            cnt++;
            console.log(cnt,time2);
            if(cnt*1000==time2-1000){
                setTimeout(function(){
                    document.getElementById("guest1").setAttribute("ondragover",function no(){});
                    $("#want1").html("太久了!!!<br>掰掰!!!");
                    cando1 = 0;
                },500);
            }else if(cnt*1000 >= time2){
                $("#guest1").fadeOut();
                $("#want1").fadeOut();
                clearInterval(stop1);
                cando1 = 0;
                call_1();
            }else{
                $("#want1").html(output+"<br>"+(time2-(cnt+1)*1000)/1000);
            }
        },1000)
    }, time);
    }
}



function call_2(){
    if(!endgame){
    let time = 500+Math.random()*2000;
    let food = ["要烤魚!","要生魚!","要煎蛋!","要生蛋!","要烤雞!","要活雞!","要湯麵!","要蘋果!","要梨子!","要薯條!"];
    let id = ["fish_ok","fish","egg_ok","egg","chicken_ok","chicken","noodle_ok","apple","pear","fri"];
    let tp = Math.floor(Math.random()*10);
    setTimeout(function(){
        $("#want2").html(food[tp]);
        $("#guest2").fadeIn();
        $("#want2").fadeIn();
        guest2want = id[tp];
   }, time);
   let time2;
   if(timeqq >= 35) time2 = ( 5000 + (Math.floor(Math.random()*6)*1000));  //剛開始遊戲 可能5~10秒
   else if(timeqq >= 15) time2 = (5000 + (Math.floor(Math.random()*3)*1000)); //剛開始遊戲 可能5~7秒
   else time2 = (3000 + (Math.floor(Math.random()*5)*1000)); //3~7秒
    let cnt=0;
    setTimeout(function(){
         let output = food[tp];
         cando2 = 1;
         guest2want = id[tp];
         $("#want2").html(output+"<br>"+(time2-(cnt+1)*1000)/1000);
         $("#guest2").fadeIn();
         $("#want2").fadeIn();
         $("#guest2").attr("ondragover","allowDrop(event)");
         if(cando2==1)stop2 = setInterval(function(){
            cnt++;
            if(cnt*1000==time2-1000){
                setTimeout(function(){
                    document.getElementById("guest2").setAttribute("ondragover",function no(){});
                    $("#want2").html("太久了!!!<br>掰掰!!!");
                    cando1 = 0;
                },500);
            }else if(cnt*1000 == time2){
                $("#guest2").fadeOut();
                $("#want2").fadeOut();
                clearInterval(stop2);
                cando2 = 0;
                call_2();
            }else{
                $("#want2").html(output+"<br>"+(time2-(cnt+1)*1000)/1000);
            }
        },1000)
    }, time);
}
}
function call_3(){
    if(!endgame){
    let time = 500+Math.random()*2000;
    let food = ["要烤魚!","要生魚!","要煎蛋!","要生蛋!","要烤雞!","要活雞!","要湯麵!","要蘋果!","要梨子!","要薯條!"];
    let id = ["fish_ok","fish","egg_ok","egg","chicken_ok","chicken","noodle_ok","apple","pear","fri"];
    let tp = Math.floor(Math.random()*10);
    setTimeout(function(){
        $("#want3").html(food[tp]);
        $("#guest3").fadeIn();
        $("#want3").fadeIn();
        guest3want = id[tp];
   }, time);
   let time2;
   if(timeqq >= 35) time2 = ( 5000 + (Math.floor(Math.random()*6)*1000));  //剛開始遊戲 可能5~10秒
   else if(timeqq >= 15) time2 = (5000 + (Math.floor(Math.random()*3)*1000)); //剛開始遊戲 可能5~7秒
   else time2 = (3000 + (Math.floor(Math.random()*5)*1000)); //3~7秒
    let cnt=0;
    setTimeout(function(){
         let output = food[tp];
         cando3 = 1;
         guest3want = id[tp];
         $("#want3").html(output+"<br>"+(time2-(cnt+1)*1000)/1000);
         $("#guest3").fadeIn();
         $("#want3").fadeIn();
         $("#guest3").attr("ondragover","allowDrop(event)");
         if(cando3==1)stop3 = setInterval(function(){
            cnt++;
            if(cnt*1000==time2-1000){
                setTimeout(function(){
                    document.getElementById("guest3").setAttribute("ondragover",function no(){});
                    $("#want3").html("太久了!!!<br>掰掰!!!");
                    cando3 = 0;
                },500);
            }else if(cnt*1000 == time2){
                $("#guest3").fadeOut();
                $("#want3").fadeOut();
                clearInterval(stop3);
                cando3 = 0;
                call_3();
            }else{
                $("#want3").html(output+"<br>"+(time2-(cnt+1)*1000)/1000);
            }
        },1000)
    }, time);
}
}

function call_4(){
    if(!endgame){
    let time = 500+Math.random()*2000;
    let food = ["要烤魚!","要生魚!","要煎蛋!","要生蛋!","要烤雞!","要活雞!","要湯麵!","要蘋果!","要梨子!","要薯條!"];
    let id = ["fish_ok","fish","egg_ok","egg","chicken_ok","chicken","noodle_ok","apple","pear","fri"];
    let tp = Math.floor(Math.random()*10);
    setTimeout(function(){
        $("#want4").html(food[tp]);
        $("#guest4").fadeIn();
        $("#want4").fadeIn();
        guest4want = id[tp];
   }, time);
   let time2;
   if(timeqq >= 35) time2 = ( 5000 + (Math.floor(Math.random()*6)*1000));  //剛開始遊戲 可能5~10秒
   else if(timeqq >= 15) time2 = (5000 + (Math.floor(Math.random()*3)*1000)); //剛開始遊戲 可能5~7秒
   else time2 = (3000 + (Math.floor(Math.random()*5)*1000)); //3~7秒
    let cnt=0;
    setTimeout(function(){
         let output = food[tp];
         cando4 = 1;
         guest4want = id[tp];
         $("#want4").html(output+"<br>"+(time2-(cnt+1)*1000)/1000);
         $("#guest4").fadeIn();
         $("#want4").fadeIn();
         $("#guest4").attr("ondragover","allowDrop(event)");
         if(cando4==1)stop4 = setInterval(function(){
            cnt++;
            if(cnt*1000==time2-1000){
                setTimeout(function(){
                    document.getElementById("guest4").setAttribute("ondragover",function no(){});
                    $("#want4").html("太久了!!!<br>掰掰!!!");
                    cando4 = 0;
                },500);
            }else if(cnt*1000 == time2){
                $("#guest4").fadeOut();
                $("#want4").fadeOut();
                clearInterval(stop4);
                cando4 = 0;
                call_4();
            }else{
                $("#want4").html(output+"<br>"+(time2-(cnt+1)*1000)/1000);
            }
        },1000)
    }, time);
}
}
var IE = "ActiveXObject" in window ;
var beginDrag = function(e){
    e.dataTransfer.setData("text", e.target.id);
    //cursor: -webkit-grabbing; cursor: grabbing; 
    //$("#"+e.target.id).css("cursor","-webkit-grabbing").css("cursor","grabbing");
    console.log(e.target.id);
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
   // console.log(e.target.id);  //烤箱
   // console.log(food);         //魚
    let output = "Cooking~";
    if(cook == "cook_1"){
        if(food == "fish"){
            cook_.setAttribute("ondragover",function no(){});
            cook_.setAttribute("src","cooking_1.png");
            let time = 4;
            document.getElementById("time_cook_1").innerHTML = output+ time;
           $("#time_cook_1").css("color","white")
            _4sec = setInterval(function(){
                time--;
                document.getElementById("time_cook_1").innerHTML =   output+time;
            }, 1000);
            setTimeout(function(){
                cook_.setAttribute("src","cook_1.png");
                $("#fish_ok").show();
                document.getElementById("time_cook_1").innerHTML = "TimesOut!!!";
                clearInterval(_4sec);
                cook_.setAttribute("ondragover","allowDrop(event)");
                $("#time_cook_1").css("color","black")
            },5000)
        }else if(food == "chicken"){
            cook_.setAttribute("ondragover",function no(){});
            cook_.setAttribute("src","cooking_1.png");
            let time = 5;
            document.getElementById("time_cook_1").innerHTML = output+ time;
           $("#time_cook_1").css("color","white")
            _5sec = setInterval(function(){
                time--;
                document.getElementById("time_cook_1").innerHTML =   output+time;
            }, 1000);
            setTimeout(function(){
                cook_.setAttribute("src","cook_1.png");
                $("#chicken_ok").show();
                document.getElementById("time_cook_1").innerHTML = "TimesOut!!!";
                clearInterval(_5sec);
                cook_.setAttribute("ondragover","allowDrop(event)");
                $("#time_cook_1").css("color","black")
            },5000)
        }
    }else if(cook == "cook_2"){
        if(food == "egg"){
            cook_.setAttribute("ondragover",function no(){});
            cook_.setAttribute("src","cooking_2.png");
            let time = 3;
            document.getElementById("time_cook_2").innerHTML = output+ time;
            $("#time_cook_2").css("color","white")
            _3sec = setInterval(function(){
                time--;
                document.getElementById("time_cook_2").innerHTML =   output+time;
            }, 1000);
            setTimeout(function(){
                cook_.setAttribute("src","cook_2.png");
                $("#egg_ok").show();
                document.getElementById("time_cook_2").innerHTML = "TimesOut!!!";
                clearInterval(_3sec);
                cook_.setAttribute("ondragover","allowDrop(event)");
            },3000)
        }
    }else if(cook == "cook_3"){
        if(food == "noodle"){
            cook_.setAttribute("ondragover",function no(){});
            cook_.setAttribute("src","cooking_3.png");
            let time = 3;
            document.getElementById("time_cook_3").innerHTML = output+ time;
            $("#time_cook_3").css("color","white")
            _3_1sec = setInterval(function(){
                time--;
                document.getElementById("time_cook_3").innerHTML =   output+time;
            }, 1000);
            setTimeout(function(){
                cook_.setAttribute("src","cook_3.png");
                $("#noodle_ok").show();
                document.getElementById("time_cook_3").innerHTML = "TimesOut!!!";
                clearInterval(_3_1sec);
                cook_.setAttribute("ondragover","allowDrop(event)");
            },3000)
        }
    }else if(cook == "guest1"){  
        clearInterval(stop1); 
        cando1 = 0;
        if(food == guest1want){    
            document.getElementById("ok_mus").play();       
            if(food == "chicken_ok" || food == "fish_ok" || food == "egg_ok" || food == "noodle_ok") {
                score+=10;
                $("#"+food).hide();
            }else score++;
            $("#want1").html("Thank~");
            setTimeout(function(){
                $("#guest1").fadeOut();
                $("#want1").fadeOut();
                call_1();
            },500);    
        }else{
            document.getElementById("no_mus").play();     
            if((guest1want == "chicken_ok" && food == "chicken") || (guest1want == "fish_ok" && food == "fish") || (guest1want == "noodle_ok" && food == "noodle")||(guest1want == "egg_ok" && food == "egg")){
                $("#want1").html("要熟的!!!");
                score -= 3;
            }else{
                $("#want1").html("不是這個!!!");
                score--;
            }
            setTimeout(function(){
                $("#guest1").fadeOut();
                $("#want1").fadeOut();
                call_1();
            },300);
        }
        $("#score").html("Score :"+score);
    }else if(cook == "guest2"){  
        clearInterval(stop2); 
        cando2 = 0;
        if(food == guest2want){   
            document.getElementById("ok_mus").play();              
            if(food == "chicken_ok" || food == "fish_ok" || food == "egg_ok" || food == "noodle_ok") {
                score+=10;
                $("#"+food).hide();
            }else score++;
            $("#want2").html("Thank~");
            setTimeout(function(){
                $("#guest2").fadeOut();
                $("#want2").fadeOut();
                call_2();
            },500);    
        }else{
            document.getElementById("no_mus").play();     
            if((guest2want == "chicken_ok" && food == "chicken") || (guest2want == "fish_ok" && food == "fish") || (guest2want == "noodle_ok" && food == "noodle")||(guest2want == "egg_ok" && food == "egg")){
                $("#want2").html("要熟的!!!");
                score -= 3;
            }else{
                $("#want2").html("不是這個!!!");
                score--;
            }
            setTimeout(function(){
                $("#guest2").fadeOut();
                $("#want2").fadeOut();
                call_2();
            },300);
        }
        $("#score").html("Score :"+score);
    }else if(cook == "guest3"){  
        clearInterval(stop3); 
        cando3 = 0;
        if(food == guest3want){     
            document.getElementById("ok_mus").play();           
            if(food == "chicken_ok" || food == "fish_ok" || food == "egg_ok" || food == "noodle_ok") {
                score+=10;
                $("#"+food).hide();
            }else score++;
            $("#want3").html("Thank~");
            setTimeout(function(){
                $("#guest3").fadeOut();
                $("#want3").fadeOut();
                call_3();
            },500);    
        }else{
            document.getElementById("no_mus").play();     
            if((guest3want == "chicken_ok" && food == "chicken") || (guest3want == "fish_ok" && food == "fish") || (guest3want == "noodle_ok" && food == "noodle")||(guest3want == "egg_ok" && food == "egg")){
                $("#want3").html("要熟的!!!");
                score -= 3;
            }else{
                $("#want3").html("不是這個!!!");
                score--;
            }
            setTimeout(function(){
                $("#guest3").fadeOut();
                $("#want3").fadeOut();
                call_3();
            },300);
        }
        $("#score").html("Score :"+score);
    }else if(cook == "guest4"){  
        clearInterval(stop4);  
        cando4 = 0;
        if(food == guest4want){         
            document.getElementById("ok_mus").play();       
            if(food == "chicken_ok" || food == "fish_ok" || food == "egg_ok" || food == "noodle_ok") {
                score+=10;
                $("#"+food).hide();
            }else score++;
            $("#want4").html("Thank~");
            setTimeout(function(){
                $("#guest4").fadeOut();
                $("#want4").fadeOut();
                call_4();
            },500);    
        }else{
            document.getElementById("no_mus").play();     
            if((guest4want == "chicken_ok" && food == "chicken") || (guest4want == "fish_ok" && food == "fish") || (guest4want == "noodle_ok" && food == "noodle")||(guest4want == "egg_ok" && food == "egg")){
                $("#want4").html("要熟的!!!");
                score -= 3;
            }else{
                $("#want4").html("不是這個!!!");
                score--;
            }
            setTimeout(function(){
                $("#guest4").fadeOut();
                $("#want4").fadeOut();
                call_4();
            },300);
        }
        $("#score").html("Score :"+score);
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

  
