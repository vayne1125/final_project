let hei = window.innerHeight;
let wid = window.innerWidth;
function image_repos(){
    console.log(hei);
    console.log(wid);
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
        
        $("checkin").css({
            "left" : ""+(wid/3+270)+"px",
            "top"  : ""+(hei/4)+"px",
        })
        $("form").css({
            "left" : ""+(wid/3+60)+"px",
            "top"  : ""+(hei/4+130)+"px",
        })
    });
    doani();
}
function doani(){
    $("#door_out").hide();
    $("#cloud").hide();
    $("#apple_with_board").hide();
    $("#roof").addClass("roof_")
    setTimeout(function(){
        $("#house").addClass("house_")
    },1000)
    setTimeout(function(){
        $("#apple_with_board").fadeTo(2500,1);
        $("#restaurant").fadeTo(3000,1);
    },3000)
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
    /*
    $("#chimney").mouseover(function(){
        $("#cloud").animate({
            top:"-=150px",
        },1000)
       
    });
    $("#chimney").mouseout(function(){
        $("#cloud").animate({
            top:"+=150px",
        },1000) 
      
    });
    */
    $("#door_out").click(function(){
        $("div div").fadeTo(100,0);
        $("div div").hide();
        $("#checkin").show();
        $("#restaurant").css({
            "top":"-=52px",
        })
    })
}
