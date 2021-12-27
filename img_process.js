function img_resize() {   
    let wid=window.innerWidth;  hei=window.outerHeight;
   let sky= document.getElementById("sky");           
   let wood= document.getElementById("wood");

   let r_wall= document.getElementById("wall");
   let l_wall= document.getElementById("l_wall");
   let m_wall= document.getElementById("m_wall");

   $(document).ready(function(){
     $("*").attr("draggable",false);
     $(".guest").css("width",""+wid/6+"px");        //訪客
     $(".blank").css("width",""+wid/6+"px");
     $(".g").on("dragover",function(event){ event.preventDefault();}); //
     $(".head_img").css("width",""+wid/7+"px");
    $("#guest").css("top",""+wid/11+"px");////
       $("#special").css("top",""+wid/3+"px");

    $("#special").css("left",""+wid/6+"px");
    $(".box").css("width",""+wid/6+"px");
    $(".sp").css("width",""+wid/12+"px");
    $(".sp").css("margin-right","-"+wid/26+"px");
    $(".sp").css("top","-"+wid/37+"px");
    $(".sp").attr("draggable",true);
    $(".sp").mouseover(function(){$(this).css("width",""+wid/11+"px");});   //
    $(".sp").mouseout(function(){$(this).css("width",""+wid/12+"px");});    //

    $(".wasted").css("width",""+wid/6+"px");       
 });
    sky.style.width=""+wid+"px";
    wood.style.width=""+wid+"px";
    r_wall.style.height=""+hei+"px";
    l_wall.style.height=""+hei+"px";
    m_wall.style.width=""+wid+"px";


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
                    console.log(tar.src);
                let d=tar.src.split('_');
                tar.src="img_source_food_wasted_"+d[d.length-1];tar.className="wasted";tar.draggable=false;
                $(document).ready(function(){
                    $(event.target.parentNode).prepend(tar);
                });}
        
    }});
    }
