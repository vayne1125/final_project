function image_repos(){
    let hei = window.innerHeight;
    let wid = window.innerWidth;
    console.log(hei);
    console.log(wid);
    $(document).ready(function(){
        $(".roof_").css({
            "left" : wid/3+"px",
            "top"  : hei/3+"px",
        });
        doani();
    });
}
function doani(){
    $("#door_out").hide();
    $("#cloud").hide();
    $("#apple_with_board").hide();
    $("#roof").addClass("roof_")
   /* setTimeout(function(){
        $("#house").addClass("house_")
    },3000)
    
    setTimeout(function(){
        $("#apple_with_board").fadeTo(2500,1);
        $("#restaurant").fadeTo(3000,1);
    },5000)
    setTimeout(function(){
        $("#door_out").fadeIn();
        $("#door_in").fadeIn();
        $("#chimney").fadeIn();
    },4500)
    $("#door_out").mouseover(function(){
        $("#door_out").css({
            "transform":"skewY(20deg)",
            "top":"+=10px"
        });
    })
    $("#door_out").mouseout(function(){
        $("#door_out").css({
            "transform":"skewY(0deg)",
            "top":"384px",
            "right": "615px",
        });
    })
    
    $("#chimney").mouseover(function(){
        $("#cloud").show();
        $("#cloud").animate({
            "top":"50px",
        },2000);   
    });
    $("#chimney").mouseout(function(){
        $("#cloud").css({
            "top":"100px",
            "opacity":"100"
        }) 
    });
    
    $("#door_out").click(function(){
        $("div div").fadeTo(100,0);
        $("div div").hide();
        $("#checkin").show();
        $("#restaurant").css({
            "top":"-=52px",
        })
    })
     */
}