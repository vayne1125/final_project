function img_resize() {   
    let wid=window.innerWidth; ;
   let sky= document.getElementById("sky");           
   let wood= document.getElementById("wood");


   $(document).ready(function(){
     $("*").attr("draggable",false);
     $("#xp").css("width",""+wid+"px").css("top",""+wid/2.19+"px").css("height",""+wid+"px");
     $(".guest").css("width",""+wid/6+"px");        //訪客
     $(".blank").css("width",""+wid/6+"px");
     $(".g").on("dragover",function(event){ event.preventDefault();}); //
     $(".head_img").css("width",""+wid/7+"px");
    $("#guest").css("top",""+wid/11+"px").css("left",""+wid/6+"px");////

    $("#special").css("top",""+wid/2.48+"px");
    $(".box").css("width",""+wid/6+"px");
    $(".sp").css("width",""+wid/12+"px").css("margin-right","-"+wid/26+"px").css("top","-"+wid/37+"px");
    $(".sp").attr("draggable",true);
    $(".sp").mouseover(function(){$(this).css("width",""+wid/11+"px");});   //
    $(".sp").mouseout(function(){$(this).css("width",""+wid/12+"px");});    //

    $(".wasted").css("width",""+wid/6+"px");       
 });
    sky.style.width=""+wid+"px";
    wood.style.width=""+wid+"px";
    wood.style.top=""+wid/3.8+"px";

    let ds=document.querySelectorAll(".sp"),dr=document.querySelectorAll(".g"),removefood; //砸食材
    [].forEach.call(ds,function(ds){
        ds.ondragstart=function(event){
            removefood=event.target.parentNode;
            event.dataTransfer.setData("text", event.target.id);
        };});
    [].forEach.call(dr,function(drr){
        drr.ondrop=function(event){
            let n=Math.floor(Math.random()*4);
            event.preventDefault();
            let data = event.dataTransfer.getData("text");
            let tar=document.querySelector('#'+data);
                if(!n){                 //guest閃躲
                    $(document).ready(
                        function(){
                            $(event.target.parentNode.childNodes).animate({top:"+=500px"},"slow");
                            $(event.target.parentNode.childNodes).animate({top:"-=500px"},"slow");
                            $(tar).remove();
                        }
                    );
                }
                else{
                let d=tar.src.split('_');
                    console.log(d);
                tar.src="img_source_food_wasted_"+d[d.length-1];tar.className="wasted";tar.draggable=false;
                $(document).ready(function(){
                    $(event.target.parentNode).prepend(tar);
                });}
        
    }});
    }
